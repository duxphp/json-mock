"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = userRoutes;
const express_validator_1 = require("express-validator");
const response_1 = require("../utils/response");
function userRoutes(app) {
    app.post('/api/user', [
        (0, express_validator_1.body)('nickname').exists(),
        (0, express_validator_1.body)('email').exists()
    ], (req, res) => {
        const error = (0, response_1.validateError)(req, res);
        if (error) {
            return;
        }
        res.status(200).json({
            code: 200,
            message: 'ok'
        });
    });
    app.put('/api/user', [
        (0, express_validator_1.body)('nickname').exists(),
        (0, express_validator_1.body)('email').exists()
    ], (req, res) => {
        const error = (0, response_1.validateError)(req, res);
        if (error) {
            return;
        }
        res.status(200).json({
            code: 200,
            message: 'ok'
        });
    });
    app.patch('/api/user', (req, res) => {
        res.status(200).json({
            code: 200,
            message: 'ok'
        });
    });
    app.delete('/api/user', (req, res) => {
        res.status(200).json({
            code: 200,
            message: 'ok'
        });
    });
}
//# sourceMappingURL=user.js.map