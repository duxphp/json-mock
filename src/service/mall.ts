import { Express, Request, Response, Router } from 'express'
import { body, validationResult } from 'express-validator'
import { validateError } from '../utils/response'

export function mallRoutes(app: Express) {
  app.post('/api/mall',  [
    body('title').exists()
  ], (req: Request, res: Response) => {
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
  ], (req: Request, res: Response) => {
    const error = validateError(req, res)
    if (error) {
      return
    }
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })

  app.patch('/api/mall', (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })

  app.delete('/api/mall', (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })
}
