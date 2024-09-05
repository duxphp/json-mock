import { body } from 'express-validator'
import { validateError } from '../utils/response.js'

export function commonRoutes(app) {
  app.post('/api/upload', (req, res) => {
    const error = validateError(req, res)
    if (error) {
      return
    }
    res.status(200).json({
      code: 200,
      message: 'ok',
      data: [
        {
          name: 'example.png',
          url: 'https://picsum.photos/100/100',
          ext: 'png',
          mime: 'image/png',
          size: 102400
        }
      ]
    })
  })

  const filePath = './example.txt';

  app.post('/api/download', (req, res) => {
    const fileName = '示例文本.txt';
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.setHeader('Content-Type', 'text/plain');
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  })

}
