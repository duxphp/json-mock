import { validationResult } from 'express-validator'

export const validateError = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const data = {}
    const fieldErrors = errors.mapped()
    for (const key in fieldErrors) {
      if (!data[key]) {
        data[key] = []
      }
      data[key].push(fieldErrors[key].msg) 
    }
    return res.status(422).json({
      code: 422,
      message: '参数错误',
      data: data,
    });
  }
  return null
}