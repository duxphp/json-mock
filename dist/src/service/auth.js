"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = authRoutes;
const express_validator_1 = require("express-validator");
const response_1 = require("../utils/response");
function authRoutes(app) {
    app.post('/api/login', [
        (0, express_validator_1.body)('username').exists(),
        (0, express_validator_1.body)('password').exists(),
        (0, express_validator_1.body)('code').exists()
    ], (req, res) => {
        const error = (0, response_1.validateError)(req, res);
        if (error) {
            return;
        }
        res.status(200).json({
            code: 200,
            message: 'ok',
            data: {
                id: 1,
                info: {
                    nickname: '张三',
                    email: 'admin@dux.plus',
                    avatar: 'https://api.multiavatar.com/zhangsan.png'
                },
                token: 'Bearer <TOKEN>',
                permission: {}
            }
        });
    });
    app.get('/api/check', (req, res) => {
        res.status(200).json({
            code: 200,
            message: 'ok',
            data: {
                id: 1,
                info: {
                    nickname: '张三',
                    email: 'admin@dux.plus',
                    avatar: 'https://api.multiavatar.com/zhangsan.png'
                },
                token: 'Bearer <TOKEN>',
                permission: {}
            }
        });
    });
    app.post('/api/logout', (req, res) => {
        res.status(200).json({
            code: 200,
            message: 'ok'
        });
    });
    app.get('/api/captcha', (req, res) => {
        res.status(200).json({
            code: 200,
            message: 'ok'
        });
    });
    app.post('/api/captcha', (req, res) => {
        res.status(200).json({
            code: 200,
            message: 'ok'
        });
    });
}
//# sourceMappingURL=auth.js.map