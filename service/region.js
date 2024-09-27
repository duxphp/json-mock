import { body } from 'express-validator'
import { validateError } from '../utils/response.js'
import db from '../db.json' with { type: 'json' }

export function regionRoutes(app) {
  app.get('/api/region', (req, res) => {
    
    const queryParams = req.query
    const region = db['region']

    let data = []
    if (!queryParams.name) {
      data = region.filter(item => !item.parent_id).map(item => {
        return {
          id: item.id,
          name: item.name,
        }
      })
    } else {
      data = region.filter(item => item.parent_id == queryParams.name).map(item => {
        return {
          id: item.id,
          name: item.name,
        }
      })
    }
  
    res.status(200).json({
      code: 200,
      message: 'ok',
      data: data
    })
  })

}
