"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateError = void 0;
const express_validator_1 = require("express-validator");
const validateError = (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const data = {};
        const fieldErrors = errors.mapped();
        for (const key in fieldErrors) {
            if (!data[key]) {
                data[key] = [];
            }
            data[key].push(fieldErrors[key].msg);
        }
        return res.status(422).json({
            code: 422,
            message: '参数错误',
            data: data,
        });
    }
    return null;
};
exports.validateError = validateError;
//# sourceMappingURL=response.js.map