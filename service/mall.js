import { body } from 'express-validator'
import { validateError } from '../utils/response.js'

export function mallRoutes(app) {
  app.post('/api/mall',  [
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

  app.put('/api/mall',  [
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

  app.patch('/api/mall', (req, res) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })

  app.delete('/api/mall', (req, res) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })
}
