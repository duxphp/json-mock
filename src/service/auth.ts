import { Express, Request, Response, Router } from 'express'
import { body, validationResult } from 'express-validator'
import { validateError } from '../utils/response'

export function authRoutes(app: Express) {
  app.post('/api/login',  [
    body('username').exists(),
    body('password').exists(),
    body('code').exists()
  ], (req: Request, res: Response) => {
    const error = validateError(req, res)
    if (error) {
      return
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
    })
  })

  app.get('/api/check', (req: Request, res: Response) => {
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
    })
  })

  app.post('/api/logout', (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })

  app.get('/api/captcha', (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })


  app.post('/api/captcha', (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })
}
