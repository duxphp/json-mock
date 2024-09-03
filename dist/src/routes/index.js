"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_json_1 = __importDefault(require("../../db.json"));
const article_1 = require("../service/article");
const mall_1 = require("../service/mall");
const user_1 = require("../service/user");
const auth_1 = require("../service/auth");
const db = db_json_1.default;
function routes(app) {
    app.get('/', (req, res) => {
        const data = {};
        data.apiList = [
            {
                title: '文章',
                list: [
                    {
                        title: '列表',
                        method: 'GET',
                        path: '/api/article'
                    },
                    {
                        title: '详情',
                        method: 'GET',
                        path: '/api/article/:id'
                    },
                    {
                        title: '新增',
                        method: 'POST',
                        path: '/api/article'
                    },
                    {
                        title: '编辑',
                        method: 'PUT',
                        path: '/api/article/:id'
                    },
                    {
                        title: '修改',
                        method: 'PATCH',
                        path: '/api/article/:id'
                    },
                    {
                        title: '删除',
                        method: 'DELETE',
                        path: '/api/article/:id'
                    }
                ]
            },
            {
                title: '商品',
                list: [
                    {
                        title: '列表',
                        method: 'GET',
                        path: '/api/mall'
                    },
                    {
                        title: '详情',
                        method: 'GET',
                        path: '/api/mall/:id'
                    },
                    {
                        title: '新增',
                        method: 'POST',
                        path: '/api/mall'
                    },
                    {
                        title: '编辑',
                        method: 'PUT',
                        path: '/api/mall/:id'
                    },
                    {
                        title: '修改',
                        method: 'PATCH',
                        path: '/api/mall/:id'
                    },
                    {
                        title: '删除',
                        method: 'DELETE',
                        path: '/api/mall/:id'
                    }
                ]
            },
            {
                title: '用户',
                list: [
                    {
                        title: '列表',
                        method: 'GET',
                        path: '/api/user'
                    },
                    {
                        title: '详情',
                        method: 'GET',
                        path: '/api/user/:id'
                    },
                    {
                        title: '新增',
                        method: 'POST',
                        path: '/api/user'
                    },
                    {
                        title: '编辑',
                        method: 'PUT',
                        path: '/api/user/:id'
                    },
                    {
                        title: '修改',
                        method: 'PATCH',
                        path: '/api/user/:id'
                    },
                    {
                        title: '删除',
                        method: 'DELETE',
                        path: '/api/user/:id'
                    }
                ]
            },
            {
                title: '授权',
                list: [
                    {
                        title: '验证码获取',
                        method: 'GET',
                        path: '/api/captcha'
                    },
                    {
                        title: '验证码验证',
                        method: 'POST',
                        path: '/api/captcha'
                    },
                    {
                        title: '登录',
                        method: 'POST',
                        path: '/api/login'
                    },
                    {
                        title: '退出',
                        method: 'POST',
                        path: '/api/logout'
                    },
                    {
                        title: '检测',
                        method: 'GET',
                        path: '/api/check'
                    }
                ]
            }
        ];
        res.status(200).render('index', data);
    });
    (0, article_1.articleRoutes)(app);
    (0, mall_1.mallRoutes)(app);
    (0, user_1.userRoutes)(app);
    (0, auth_1.authRoutes)(app);
    app.get('/api/:resource', (req, res) => {
        var _a, _b;
        const queryParams = req.query;
        const limit = Number((_a = req.query) === null || _a === void 0 ? void 0 : _a.pageSize);
        const page = Number((_b = req.query) === null || _b === void 0 ? void 0 : _b.page) || 1;
        const resource = req.params.resource;
        let data = db[resource];
        const meta = {};
        const isArray = Array.isArray(data);
        if (isArray) {
            data = data.filter((item) => {
                for (const key in queryParams) {
                    if (key.endsWith('_sort') || key === 'pageSize' || key === 'page') {
                        continue;
                    }
                    if (item[key] !== queryParams[key]) {
                        return false;
                    }
                }
                return true;
            });
        }
        if (isArray && limit) {
            meta.total = data.length;
            meta.page = page;
            const start = (page - 1) * limit;
            const end = page * limit;
            data = data.slice(start, end);
        }
        const sortParams = {};
        for (const key in queryParams) {
            if (key.endsWith('_sort')) {
                const newKey = key.slice(0, -5);
                sortParams[newKey] = queryParams[key];
            }
        }
        for (const key in sortParams) {
            const sort = sortParams[key];
            if (sort === 'asc') {
                data = data.sort((a, b) => {
                    if (a[key] > b[key]) {
                        return 1;
                    }
                    if (a[key] < b[key]) {
                        return -1;
                    }
                    return 0;
                });
            }
            if (sort === 'desc') {
                data = data.sort((a, b) => {
                    if (a[key] > b[key]) {
                        return -1;
                    }
                    if (a[key] < b[key]) {
                        return 1;
                    }
                    return 0;
                });
            }
        }
        res.status(200).json({
            code: 200,
            message: 'ok',
            data: data,
            meta
        });
    });
    app.get('/api/:resource/:id', (req, res) => {
        const resource = req.params.resource;
        const id = req.params.id;
        const data = db[resource].find((item) => item.id == id);
        res.status(200).json({
            code: 200,
            message: 'ok',
            data: data || [],
            meta: {}
        });
    });
}
exports.default = routes;
//# sourceMappingURL=index.js.map