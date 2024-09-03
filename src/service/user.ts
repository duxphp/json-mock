import { Express, Request, Response, Router } from 'express'
import { body, validationResult } from 'express-validator'
import { validateError } from '../utils/response'

export function userRoutes(app: Express) {
  app.post('/api/user',  [
    body('nickname').exists(),
    body('email').exists()
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

  app.put('/api/user',  [
    body('nickname').exists(),
    body('email').exists()
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

  app.patch('/api/user', (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })

  app.delete('/api/user', (req: Request, res: Response) => {
    res.status(200).json({
      code: 200,
      message: 'ok'
    })
  })
}
