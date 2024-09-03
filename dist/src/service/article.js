"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleRoutes = articleRoutes;
const express_validator_1 = require("express-validator");
const response_1 = require("../utils/response");
function articleRoutes(app) {
    app.post('/api/article', [
        (0, express_validator_1.body)('title').exists()
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
    app.put('/api/article', [
        (0, express_validator_1.body)('title').exists()
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
    app.patch('/api/article', (req, res) => {
        res.status(200).json({
            code: 200,
            message: 'ok'
        });
    });
    app.delete('/api/article', (req, res) => {
        res.status(200).json({
            code: 200,
            message: 'ok'
        });
    });
}
//# sourceMappingURL=article.js.map