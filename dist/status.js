"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_OK_STATUS = exports.obtainValidStatus = void 0;
let VALID_STATUS = [];
const obtainValidStatus = () => {
    if (VALID_STATUS.length === 0) {
        VALID_STATUS = exports.HTTP_OK_STATUS;
    }
    return VALID_STATUS;
};
exports.obtainValidStatus = obtainValidStatus;
exports.HTTP_OK_STATUS = Array.from({ length: 100 }, (_, i) => i + 200);
//# sourceMappingURL=status.js.map