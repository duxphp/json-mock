import { Express, Request, Response, Router } from 'express'
import dbJson from '../../db.json'
import { articleRoutes } from '../service/article'
import { mallRoutes } from '../service/mall'
import { userRoutes } from '../service/user'
import { authRoutes } from '../service/auth'
const db = dbJson as Record<string, any>

function routes(app: Express) {
  
  app.get('/', (req: Request, res: Response) => {


    const data: Record<string, any> = {}

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
    ]

    res.status(200).render('index', data)
  })

  articleRoutes(app)
  mallRoutes(app)
  userRoutes(app)
  authRoutes(app)

  app.get('/api/:resource', (req: Request, res: Response) => {
    
    const queryParams = req.query
    const limit = Number(req.query?.pageSize)
    const page = Number(req.query?.page) || 1
    const resource = req.params.resource as string
    let data = db[resource]
    const meta: Record<string, any> = {}

    const isArray = Array.isArray(data)

    if (isArray) {
      data = data.filter((item: Record<string, any>) => {
        for (const key in queryParams) {
          if (key.endsWith('_sort') || key === 'pageSize' || key === 'page') {
            continue
          }
          if (item[key] !== queryParams[key]) {
            return false
          }
        }
        return true
      })
    }

    if (isArray && limit) {
      meta.total = data.length
      meta.page = page
      const start = (page - 1) * limit
      const end = page * limit
      data = data.slice(start, end)
    }

    const sortParams: Record<string, any> = {};
    for (const key in queryParams) {
      if (key.endsWith('_sort')) {
        const newKey = key.slice(0, -5)
        sortParams[newKey] = queryParams[key];
      }
    }

    for (const key in sortParams) {
        const sort = sortParams[key]
        if (sort === 'asc') {
          data = data.sort((a: Record<string, any>, b: Record<string, any>) => {
            if (a[key] > b[key]) {
              return 1
            }
            if (a[key] < b[key]) {
              return -1
            }
            return 0
          })
        }
        if (sort === 'desc') {
          data = data.sort((a: Record<string, any>, b: Record<string, any>) => {
            if (a[key] > b[key]) {
              return -1
            }
            if (a[key] < b[key]) {
              return 1
            }
            return 0
          })
        }
    }

    res.status(200).json({
      code: 200,
      message: 'ok',
      data: data,
      meta
    })
  })

  app.get('/api/:resource/:id', (req: Request, res: Response) => {
    const resource = req.params.resource
    const id = req.params.id
    const data = db[resource].find((item: Record<string, any>) => item.id == id)
    res.status(200).json({
      code: 200,
      message: 'ok',
      data: data || [],
      meta: {}
    })
  })

}

export default routes