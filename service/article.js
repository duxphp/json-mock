import { body } from 'express-validator'
import { validateError } from '../utils/response.js'

export function articleRoutes(app) {
  app.post('/api/article',  [
    body('title').exists()
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

  app.put('/api/article',  [
    body('title').exists()
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

  app.patch('/api/article', (req, res) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })

  app.delete('/api/article', (req, res) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })
}
