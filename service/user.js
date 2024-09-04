import { body } from 'express-validator'
import { validateError } from '../utils/response.js'

export function userRoutes(app) {
  app.post('/api/user',  [
    body('nickname').exists(),
    body('email').exists()
  ], (req, res) => {
    const error = validateError(req, res)
    if (error) {
      return
    }
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })

  app.put('/api/user',  [
    body('nickname').exists(),
    body('email').exists()
  ], (req, res) => {
    const error = validateError(req, res)
    if (error) {
      return
    }
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })

  app.patch('/api/user/:id', (req, res) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })

  app.delete('/api/user/:id', (req, res) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })
}
