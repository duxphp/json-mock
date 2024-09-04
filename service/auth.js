import { body } from 'express-validator'
import { validateError } from '../utils/response.js'

export function authRoutes(app) {
  app.post('/api/login',  [
    body('username').exists(),
    body('password').exists(),
    body('code').exists()
  ], (req, res) => {
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
    })
  })

  app.post('/api/logout', (req, res) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })

  app.get('/api/captcha', (req, res) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })

  app.post('/api/captcha', (req, res) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })
}
