"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = run;
require("colors");
const errors_1 = require("./errors");
async function run(core, github) {
    async function fetchPullRequests(endpoint, limit = 100) {
        try {
            const result = await endpoint.pulls.list({
                // Pass along the context for the repo
                ...github.context.repo,
                base: github.context.payload.ref ?? 'main',
                /* fetch the most recently updated PRs to keep them maintained first */
                /* we're assuming these PRs are higher priority and/or closer to being merged */
                sort: 'updated',
                direction: 'desc',
                state: 'open',
                per_page: limit,
            });
            if (result.data.length > 0) {
                core.info(`${result.data.length} open pull requests returned; sorted by most recently updated.`);
            }
            else {
                core.info(`No open pull requests returned where ${github.context.payload.ref ?? 'main'} is the base branch.`);
            }
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                core.error(error);
                core.setFailed(error.message);
            }
            else {
                core.error(errors_1.UNKNOWN_ERROR);
            }
        }
    }
    function filterPullRequests(prs) {
        const initialCount = prs.length;
        if (initialCount === 0)
            return prs;
        const isBot = (pr) => {
            return pr.user?.name === 'dependabot[bot]' || pr.user?.type === 'Bot';
        };
        const isDraft = (pr) => {
            return pr.draft === true;
        };
        try {
            // Always exclude dependabot and other bot PRs
            prs = prs.filter((pr) => {
                if (isBot(pr))
                    core.info(`Excluding bot PR: ${pr.title}`);
                return !isBot(pr);
            });
            if (prs.length !== initialCount)
                core.info(`Excluded ${initialCount - prs.length} bot PRs.`);
            const includeDrafts = core.getInput('include_drafts') === 'true' ? true : false;
            let strhold = core.getInput('include_labels');
            const allowLabels = typeof strhold !== 'undefined' && strhold.length !== 0
                ? strhold.split(',').map((i) => i.trim())
                : undefined;
            strhold = core.getInput('exclude_labels');
            const denyLabels = typeof strhold !== 'undefined' && strhold.length !== 0
                ? strhold.split(',').map((i) => i.trim())
                : undefined;
            if (typeof allowLabels === 'undefined' &&
                typeof denyLabels === 'undefined' &&
                includeDrafts) {
                core.info(`No limiting filters were provided, returning all ${prs.length} PRs, including drafts.`);
                return prs;
            }
            return prs.filter((pr) => {
                let allow = true;
                const print = `Excluding ${`#${pr.number}`.yellow} ${pr.title} | ${`${pr.url}`.cyan.underline}`;
                if (!includeDrafts && isDraft(pr)) {
                    core.info(`${print} due to draft status.`);
                    return false;
                }
                if (typeof allowLabels !== 'undefined' && allowLabels.length !== 0) {
                    allow =
                        allow &&
                            pr.labels.some((label) => allowLabels.includes(label.name));
                    if (!allow)
                        core.info(`${print} as none of the required labels (${allowLabels.join(', ')}) were present.`);
                }
                if (typeof denyLabels !== 'undefined' && denyLabels.length !== 0) {
                    allow =
                        allow &&
                            pr.labels.every((label) => !denyLabels.includes(label.name));
                    if (!allow)
                        core.info(`${print} because one of the blocking labels (${denyLabels.join(', ')}) was present.`);
                }
                return allow;
            });
        }
        catch (error) {
            if (error instanceof Error) {
                core.error(error);
                core.setFailed(error.message);
            }
            else {
                core.error(errors_1.UNKNOWN_FILTER_ERROR);
            }
        }
    }
    // Attempt to connect to the GitHub REST API
    const token = core.getInput('token', { required: true }) ?? process.env.GITHUB_TOKEN;
    if (typeof token === 'undefined') {
        core.error(errors_1.NO_TOKEN_ERROR);
        core.setFailed(errors_1.NO_TOKEN_ERROR);
        return;
    }
    const client = github.getOctokit(token);
    if (!client) {
        core.error(errors_1.AUTH_CLIENT_ERROR);
        core.setFailed(errors_1.AUTH_CLIENT_ERROR);
        return;
    }
    /* Check if the token is valid */
    let exit = false;
    try {
        await client.rest.users.getAuthenticated();
    }
    catch (error) {
        if (error instanceof Error) {
            core.error(error);
            core.setFailed(error.message);
        }
        else {
            core.error(errors_1.AUTH_GH_ERROR);
        }
        exit = true;
    }
    if (exit)
        return;
    core.info('Successfully authenticated with the GitHub API.');
    if (github.context.payload.action === 'deleted') {
        core.info('The ref was deleted, so there is no need to update any pull requests.');
        return;
    }
    const strhold = core.getInput('limit');
    const limit = typeof strhold !== 'undefined' && strhold.length !== 0
        ? parseInt(strhold, 10)
        : undefined;
    /* Find out which pull requests exist to meet these requirements */
    const prs = [];
    if (typeof limit !== 'undefined' && limit > 100) {
        let pages = Math.ceil(limit / 100); // limit = 10, pages = 1; limit = 101, pages = 2
        do {
            if (prs.length >= limit)
                break;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const nextPage = await fetchPullRequests(client.rest, pages === 1 ? limit : 100);
            if (!nextPage ||
                nextPage.status !== 200 ||
                !nextPage.data ||
                nextPage.data.length === 0)
                break;
            // if we have a result, filter out the PRs that don't meet the requirements
            // this must be done here so we know if we need to fetch another page
            const filtered = filterPullRequests(nextPage.data) ?? [];
            if (filtered.length > 0) {
                filtered.forEach((pr) => {
                    // Don't add duplicates
                    if (prs.some((p) => p.number === pr.number))
                        return;
                    prs.push(pr);
                });
            }
        } while (prs.length < limit && --pages > 0);
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const page = await fetchPullRequests(client.rest);
        if (page && page.status === 200 && page.data && page.data.length > 0) {
            prs.push(...(filterPullRequests(page.data) ?? []));
        }
    }
    /* No PRs? No problem! */
    if (prs.length === 0) {
        core.info('No pull requests found that meet the requirements.');
        core.setOutput('updated', 0);
        core.setOutput('failed', 0);
        return;
    }
    if (typeof limit !== 'undefined' && prs.length > limit) {
        core.info(`Limiting the PRs being updated to the first ${limit} to have been most recently updated, any remaining will be skipped.`);
    }
    core.info(`Found ${prs.length} pull requests to update.\n\n`);
    await Promise.all(prs.map(async (pr) => {
        core.debug(`Attempting to update ${`#${pr.number}`.yellow} ${pr.title} ${`${pr.url}`.underline.cyan}...`);
        let result;
        /* @todo Figure out how to configure rebase updates */
        try {
            result = await client.rest.pulls.updateBranch({
                ...github.context.repo,
                expected_head_sha: pr.head.sha,
                pull_number: pr.number,
            });
        }
        catch (err) {
            core.info(`Failed to update ${`#${pr.number}`.yellow} ${pr.title} ${`${pr.url}`.underline.cyan}`);
            const error = err;
            core.info(error.message);
        }
        if (!result)
            return;
        core.debug(`Result: ${result.status} ${result.status !== 200
            ? `${result.data.message}\n${`${result.url}`.underline.cyan}`
            : ''}`);
        return { result, pr };
    })).then((results) => {
        if (!results)
            return;
        results = results.filter((r) => typeof r !== 'undefined');
        const passed = results.filter((r) => r.result.status === 200);
        const failed = results.filter((r) => r.result.status !== 200);
        results = results.sort((a, b) => a.pr.number - b.pr.number);
        core.info(`\n\n-------------------------\nAttempted to update ${results.length} pull request${results.length === 1 ? '' : 's'}:\n${results
            .map((r) => `  ${r.result.status !== 200 ? '❌' : '✅'}  ${`#${r.pr.number}`.yellow} ${r.pr.title}\t${`${r.pr.number}`.underline.cyan}`)
            .join('\n')}\n-------------------------\n\n${'Summary'.underline}\n---\n  ${`${passed.length}`.green} succeeded.\n  ${`${failed.length}`.red} failed.`);
        core.setOutput('updated', passed.length);
        core.setOutput('failed', failed.length);
    });
}
//# sourceMappingURL=main.js.map