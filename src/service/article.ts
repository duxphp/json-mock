import { Express, Request, Response, Router } from 'express'
import { body, validationResult } from 'express-validator'
import { validateError } from '../utils/response'

export function articleRoutes(app: Express) {
  app.post('/api/article',  [
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

  app.put('/api/article',  [
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

  app.patch('/api/article', (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })

  app.delete('/api/article', (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })
}
