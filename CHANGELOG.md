# [1.1.0](https://github.com/DiegoRamil/actions-pr-auto-update/compare/v1.0.4...v1.1.0) (2025-03-03)


### Bug Fixes

* **ci:** exclude natural language and md from super linter ([7d9013d](https://github.com/DiegoRamil/actions-pr-auto-update/commit/7d9013d87c3520e916ad9a1457c18610cdf8429d))
* **ci:** linting branches ([6a6ad5c](https://github.com/DiegoRamil/actions-pr-auto-update/commit/6a6ad5cd5c69781a23afc85fbe7cd3c733fd67e4))
* **ext:** rename js to cjs in commitlint file ([22d6e1d](https://github.com/DiegoRamil/actions-pr-auto-update/commit/22d6e1d6d08392fb413dc5370f035bf8bda3359f))
* **license:** change authir ([1bc107f](https://github.com/DiegoRamil/actions-pr-auto-update/commit/1bc107f858bd242389a3838c58ab3e60e4a78f57))
* **license:** change author ([12cf0a4](https://github.com/DiegoRamil/actions-pr-auto-update/commit/12cf0a4479254e464c1b2e6a79644f3584d790ab))
* **linter:** disable json due to compatibility issues with eslint 9 ([d53a78b](https://github.com/DiegoRamil/actions-pr-auto-update/commit/d53a78b3feb18eaddd2c5379e1caf1f4853f09ad))
* **linter:** remove non required linters ([c02084c](https://github.com/DiegoRamil/actions-pr-auto-update/commit/c02084cbc162a3c77b3f2fd47245d46b60c65d62))
* **styling:** add build folder to eslint exclusions ([6b07c79](https://github.com/DiegoRamil/actions-pr-auto-update/commit/6b07c7976fbf245dec35924e62395dae1fe57e23))


### Features

* **dev:** add local action script ([fa2f90b](https://github.com/DiegoRamil/actions-pr-auto-update/commit/fa2f90b0c611fc727459982c22ee830cdbedc487))

## [1.0.4](https://github.com/DiegoRamil/actions-pr-auto-update/compare/v1.0.3...v1.0.4) (2024-12-16)

### Bug Fixes

- **readme:** update fork reference
  ([328bfa9](https://github.com/DiegoRamil/actions-pr-auto-update/commit/328bfa900531945823efb61edf8d4719d45528da))

## [1.0.3](https://github.com/DiegoRamil/actions-pr-auto-update/compare/v1.0.2...v1.0.3) (2024-12-09)

### Bug Fixes

- **action:** valid status in summary
  ([#4](https://github.com/DiegoRamil/actions-pr-auto-update/issues/4))
  ([c688300](https://github.com/DiegoRamil/actions-pr-auto-update/commit/c6883004afda39bedd0c997b50a4d4ff9fcdd946))
- **docs:** fork citation url
  ([#2](https://github.com/DiegoRamil/actions-pr-auto-update/issues/2))
  ([fb79bd3](https://github.com/DiegoRamil/actions-pr-auto-update/commit/fb79bd3940e1281bc88ca2a33bfe98f2c4ad1f8e))

## [1.0.2](https://github.com/DiegoRamil/actions-pr-auto-update/compare/v1.0.1...v1.0.2) (2024-12-09)

### Bug Fixes

- **ci:** use pat token
  ([2f76c94](https://github.com/DiegoRamil/actions-pr-auto-update/commit/2f76c94d7fbff8fb4f7049858eaba8ae88cd2b44))

## [1.0.1](https://github.com/DiegoRamil/actions-pr-auto-update/compare/v1.0.0...v1.0.1) (2024-12-09)

### Bug Fixes

- **ci:** update gh token permissions
  ([55a959d](https://github.com/DiegoRamil/actions-pr-auto-update/commit/55a959d8acbb36ad084b6bf999c58785961b35ea))

# 1.0.0 (2024-12-09)

### Bug Fixes

- bypass loop when we're only fetching 1 page
  ([d24a5b7](https://github.com/DiegoRamil/actions-pr-auto-update/commit/d24a5b7511d724503960279dbbc320ec62192863))
- **ci:** update gh token ref
  ([795fb6a](https://github.com/DiegoRamil/actions-pr-auto-update/commit/795fb6a190391828b36b18cecc642c5f4973e37f))
- Clean up documentation formatting
  ([f121bb3](https://github.com/DiegoRamil/actions-pr-auto-update/commit/f121bb3cc267de17b916b296f19e7cb5e087fc61))
- pass in expected sha for update branch
  ([d6af7cb](https://github.com/DiegoRamil/actions-pr-auto-update/commit/d6af7cb3a51d40213690d600f2f269a26271bfe2))
- repair invalid variable
  ([fec37eb](https://github.com/DiegoRamil/actions-pr-auto-update/commit/fec37eb9b8133b4e21ab6765f73433c78f4d164b))
- resolve GITHUB_TOKEN error
  ([6f1679e](https://github.com/DiegoRamil/actions-pr-auto-update/commit/6f1679eb736ad2d120e597c5809c3b50f5f76854))
- standardize token structure
  ([4992fe6](https://github.com/DiegoRamil/actions-pr-auto-update/commit/4992fe610e39282e73f5605109cc3d38886917e7))
- updating release logic
  ([3d47bfa](https://github.com/DiegoRamil/actions-pr-auto-update/commit/3d47bfaf9f4fde317d906f3528d760bcbc2e8c06))
- updating release order
  ([704eef2](https://github.com/DiegoRamil/actions-pr-auto-update/commit/704eef2cce989f655c801dec7645e1ea6177f46b))
- use ref of pushed branch from event
  ([bb7d344](https://github.com/DiegoRamil/actions-pr-auto-update/commit/bb7d3447b9695e53a31dae0486d44e11ac8a9559))
- version out of sync
  ([e70cc5e](https://github.com/DiegoRamil/actions-pr-auto-update/commit/e70cc5e6d6e40d564a9bab163543024de477bc74))

### Features

- **action:** update node engine and some improvements
  ([5ab34c9](https://github.com/DiegoRamil/actions-pr-auto-update/commit/5ab34c92374ee49fecd9329db9b62f6e0f6f3870))
- add color to console output
  ([1b2eccf](https://github.com/DiegoRamil/actions-pr-auto-update/commit/1b2eccf10b5e85f73cdd99fcb9ed6a785d9bc303))
- add config settings to action
  ([#1](https://github.com/DiegoRamil/actions-pr-auto-update/issues/1))
  ([c52e399](https://github.com/DiegoRamil/actions-pr-auto-update/commit/c52e399a87703428f67136373cd5a6eb86ff6fe2))
- add debug output
  ([e06cc3e](https://github.com/DiegoRamil/actions-pr-auto-update/commit/e06cc3eee9a86bad00f712b079502c15a321f330))
- enhanced error reporting
  ([da4f565](https://github.com/DiegoRamil/actions-pr-auto-update/commit/da4f56553a0bf272b94cdfcdaddec3aba264c70b))
- fix semantic release order of tasks
  ([be1a27c](https://github.com/DiegoRamil/actions-pr-auto-update/commit/be1a27c4e4105b3b49c7900555b8b31b26f2c368))
- more extensive console reporting added
  ([ddaa83b](https://github.com/DiegoRamil/actions-pr-auto-update/commit/ddaa83b0185d54fca0664b5849f8d86ba7e2e03d))
- prevent duplicate queries
  ([d9dc82b](https://github.com/DiegoRamil/actions-pr-auto-update/commit/d9dc82b794e3ee41fbf74edefcd5fd2ffec7b622))

# [1.1.0](https://github.com/castastrophe/actions-pr-auto-update/compare/v1.0.0...v1.1.0) (2023-10-27)

### Bug Fixes

- bypass loop when we're only fetching 1 page
  ([d24a5b7](https://github.com/castastrophe/actions-pr-auto-update/commit/d24a5b7511d724503960279dbbc320ec62192863))
- Clean up documentation formatting
  ([f121bb3](https://github.com/castastrophe/actions-pr-auto-update/commit/f121bb3cc267de17b916b296f19e7cb5e087fc61))
- pass in expected sha for update branch
  ([d6af7cb](https://github.com/castastrophe/actions-pr-auto-update/commit/d6af7cb3a51d40213690d600f2f269a26271bfe2))
- repair invalid variable
  ([fec37eb](https://github.com/castastrophe/actions-pr-auto-update/commit/fec37eb9b8133b4e21ab6765f73433c78f4d164b))
- resolve GITHUB_TOKEN error
  ([6f1679e](https://github.com/castastrophe/actions-pr-auto-update/commit/6f1679eb736ad2d120e597c5809c3b50f5f76854))
- standardize token structure
  ([4992fe6](https://github.com/castastrophe/actions-pr-auto-update/commit/4992fe610e39282e73f5605109cc3d38886917e7))
- updating release logic
  ([3d47bfa](https://github.com/castastrophe/actions-pr-auto-update/commit/3d47bfaf9f4fde317d906f3528d760bcbc2e8c06))
- updating release order
  ([704eef2](https://github.com/castastrophe/actions-pr-auto-update/commit/704eef2cce989f655c801dec7645e1ea6177f46b))
- version out of sync
  ([e70cc5e](https://github.com/castastrophe/actions-pr-auto-update/commit/e70cc5e6d6e40d564a9bab163543024de477bc74))

### Features

- add color to console output
  ([1b2eccf](https://github.com/castastrophe/actions-pr-auto-update/commit/1b2eccf10b5e85f73cdd99fcb9ed6a785d9bc303))
- add debug output
  ([e06cc3e](https://github.com/castastrophe/actions-pr-auto-update/commit/e06cc3eee9a86bad00f712b079502c15a321f330))
- enhanced error reporting
  ([da4f565](https://github.com/castastrophe/actions-pr-auto-update/commit/da4f56553a0bf272b94cdfcdaddec3aba264c70b))
- fix semantic release order of tasks
  ([be1a27c](https://github.com/castastrophe/actions-pr-auto-update/commit/be1a27c4e4105b3b49c7900555b8b31b26f2c368))
- more extensive console reporting added
  ([ddaa83b](https://github.com/castastrophe/actions-pr-auto-update/commit/ddaa83b0185d54fca0664b5849f8d86ba7e2e03d))
- prevent duplicate queries
  ([d9dc82b](https://github.com/castastrophe/actions-pr-auto-update/commit/d9dc82b794e3ee41fbf74edefcd5fd2ffec7b622))

# [1.1.0](https://github.com/castastrophe/actions-pr-auto-update/compare/v1.0.0...v1.1.0) (2023-06-01)

### Bug Fixes

- bypass loop when we're only fetching 1 page
  ([d24a5b7](https://github.com/castastrophe/actions-pr-auto-update/commit/d24a5b7511d724503960279dbbc320ec62192863))
- Clean up documentation formatting
  ([f121bb3](https://github.com/castastrophe/actions-pr-auto-update/commit/f121bb3cc267de17b916b296f19e7cb5e087fc61))
- pass in expected sha for update branch
  ([d6af7cb](https://github.com/castastrophe/actions-pr-auto-update/commit/d6af7cb3a51d40213690d600f2f269a26271bfe2))
- repair invalid variable
  ([fec37eb](https://github.com/castastrophe/actions-pr-auto-update/commit/fec37eb9b8133b4e21ab6765f73433c78f4d164b))
- resolve GITHUB_TOKEN error
  ([6f1679e](https://github.com/castastrophe/actions-pr-auto-update/commit/6f1679eb736ad2d120e597c5809c3b50f5f76854))
- standardize token structure
  ([4992fe6](https://github.com/castastrophe/actions-pr-auto-update/commit/4992fe610e39282e73f5605109cc3d38886917e7))
- updating release logic
  ([3d47bfa](https://github.com/castastrophe/actions-pr-auto-update/commit/3d47bfaf9f4fde317d906f3528d760bcbc2e8c06))
- updating release order
  ([704eef2](https://github.com/castastrophe/actions-pr-auto-update/commit/704eef2cce989f655c801dec7645e1ea6177f46b))
- version out of sync
  ([e70cc5e](https://github.com/castastrophe/actions-pr-auto-update/commit/e70cc5e6d6e40d564a9bab163543024de477bc74))

### Features

- add color to console output
  ([1b2eccf](https://github.com/castastrophe/actions-pr-auto-update/commit/1b2eccf10b5e85f73cdd99fcb9ed6a785d9bc303))
- add debug output
  ([e06cc3e](https://github.com/castastrophe/actions-pr-auto-update/commit/e06cc3eee9a86bad00f712b079502c15a321f330))
- enhanced error reporting
  ([da4f565](https://github.com/castastrophe/actions-pr-auto-update/commit/da4f56553a0bf272b94cdfcdaddec3aba264c70b))
- fix semantic release order of tasks
  ([be1a27c](https://github.com/castastrophe/actions-pr-auto-update/commit/be1a27c4e4105b3b49c7900555b8b31b26f2c368))
- more extensive console reporting added
  ([ddaa83b](https://github.com/castastrophe/actions-pr-auto-update/commit/ddaa83b0185d54fca0664b5849f8d86ba7e2e03d))
- prevent duplicate queries
  ([d9dc82b](https://github.com/castastrophe/actions-pr-auto-update/commit/d9dc82b794e3ee41fbf74edefcd5fd2ffec7b622))

# [1.1.0](https://github.com/castastrophe/actions-pr-auto-update/compare/v1.0.0...v1.1.0) (2023-05-30)

### Bug Fixes

- bypass loop when we're only fetching 1 page
  ([d24a5b7](https://github.com/castastrophe/actions-pr-auto-update/commit/d24a5b7511d724503960279dbbc320ec62192863))
- Clean up documentation formatting
  ([f121bb3](https://github.com/castastrophe/actions-pr-auto-update/commit/f121bb3cc267de17b916b296f19e7cb5e087fc61))
- pass in expected sha for update branch
  ([d6af7cb](https://github.com/castastrophe/actions-pr-auto-update/commit/d6af7cb3a51d40213690d600f2f269a26271bfe2))
- repair invalid variable
  ([fec37eb](https://github.com/castastrophe/actions-pr-auto-update/commit/fec37eb9b8133b4e21ab6765f73433c78f4d164b))
- resolve GITHUB_TOKEN error
  ([6f1679e](https://github.com/castastrophe/actions-pr-auto-update/commit/6f1679eb736ad2d120e597c5809c3b50f5f76854))
- standardize token structure
  ([4992fe6](https://github.com/castastrophe/actions-pr-auto-update/commit/4992fe610e39282e73f5605109cc3d38886917e7))
- updating release logic
  ([3d47bfa](https://github.com/castastrophe/actions-pr-auto-update/commit/3d47bfaf9f4fde317d906f3528d760bcbc2e8c06))
- updating release order
  ([704eef2](https://github.com/castastrophe/actions-pr-auto-update/commit/704eef2cce989f655c801dec7645e1ea6177f46b))
- version out of sync
  ([e70cc5e](https://github.com/castastrophe/actions-pr-auto-update/commit/e70cc5e6d6e40d564a9bab163543024de477bc74))

### Features

- add color to console output
  ([1b2eccf](https://github.com/castastrophe/actions-pr-auto-update/commit/1b2eccf10b5e85f73cdd99fcb9ed6a785d9bc303))
- add debug output
  ([e06cc3e](https://github.com/castastrophe/actions-pr-auto-update/commit/e06cc3eee9a86bad00f712b079502c15a321f330))
- enhanced error reporting
  ([da4f565](https://github.com/castastrophe/actions-pr-auto-update/commit/da4f56553a0bf272b94cdfcdaddec3aba264c70b))
- fix semantic release order of tasks
  ([be1a27c](https://github.com/castastrophe/actions-pr-auto-update/commit/be1a27c4e4105b3b49c7900555b8b31b26f2c368))
- more extensive console reporting added
  ([ddaa83b](https://github.com/castastrophe/actions-pr-auto-update/commit/ddaa83b0185d54fca0664b5849f8d86ba7e2e03d))
- prevent duplicate queries
  ([d9dc82b](https://github.com/castastrophe/actions-pr-auto-update/commit/d9dc82b794e3ee41fbf74edefcd5fd2ffec7b622))

# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.1.0](https://github.com/castastrophe/actions-pr-auto-update/compare/v1.0.1...v1.1.0) (2023-05-26)

### Bug Fixes

- Clean up documentation formatting
  ([f121bb3](https://github.com/castastrophe/actions-pr-auto-update/commit/f121bb3cc267de17b916b296f19e7cb5e087fc61))
- pass in expected sha for update branch
  ([d6af7cb](https://github.com/castastrophe/actions-pr-auto-update/commit/d6af7cb3a51d40213690d600f2f269a26271bfe2))
- repair invalid variable
  ([fec37eb](https://github.com/castastrophe/actions-pr-auto-update/commit/fec37eb9b8133b4e21ab6765f73433c78f4d164b))
- resolve GITHUB_TOKEN error
  ([6f1679e](https://github.com/castastrophe/actions-pr-auto-update/commit/6f1679eb736ad2d120e597c5809c3b50f5f76854))
- standardize token structure
  ([4992fe6](https://github.com/castastrophe/actions-pr-auto-update/commit/4992fe610e39282e73f5605109cc3d38886917e7))
- updating release logic
  ([3d47bfa](https://github.com/castastrophe/actions-pr-auto-update/commit/3d47bfaf9f4fde317d906f3528d760bcbc2e8c06))
- updating release order
  ([704eef2](https://github.com/castastrophe/actions-pr-auto-update/commit/704eef2cce989f655c801dec7645e1ea6177f46b))
- version out of sync
  ([e70cc5e](https://github.com/castastrophe/actions-pr-auto-update/commit/e70cc5e6d6e40d564a9bab163543024de477bc74))

### Features

- add config settings to action
  ([#1](https://github.com/castastrophe/actions-pr-auto-update/issues/1))
  ([c52e399](https://github.com/castastrophe/actions-pr-auto-update/commit/c52e399a87703428f67136373cd5a6eb86ff6fe2))
- add debug output
  ([e06cc3e](https://github.com/castastrophe/actions-pr-auto-update/commit/e06cc3eee9a86bad00f712b079502c15a321f330))
- enhanced error reporting
  ([da4f565](https://github.com/castastrophe/actions-pr-auto-update/commit/da4f56553a0bf272b94cdfcdaddec3aba264c70b))
- fix semantic release order of tasks
  ([be1a27c](https://github.com/castastrophe/actions-pr-auto-update/commit/be1a27c4e4105b3b49c7900555b8b31b26f2c368))
- more extensive console reporting added
  ([ddaa83b](https://github.com/castastrophe/actions-pr-auto-update/commit/ddaa83b0185d54fca0664b5849f8d86ba7e2e03d))
- prevent duplicate queries
  ([d9dc82b](https://github.com/castastrophe/actions-pr-auto-update/commit/d9dc82b794e3ee41fbf74edefcd5fd2ffec7b622))

## 1.0.0 (2023-05-25)

### Bug Fixes

- use ref of pushed branch from event
  ([bb7d344](https://github.com/castastrophe/actions-pr-auto-update/commit/bb7d3447b9695e53a31dae0486d44e11ac8a9559))

### Features

- add config settings to action
  ([#1](https://github.com/castastrophe/actions-pr-auto-update/issues/1))
  ([c52e399](https://github.com/castastrophe/actions-pr-auto-update/commit/c52e399a87703428f67136373cd5a6eb86ff6fe2))
