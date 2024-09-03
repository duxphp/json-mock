import express from 'express'
import routes from './routes'
import logger from './utils/logger'
import path from 'path';


const app = express()
app.set('views', path.join(__dirname, 'views'))
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')
app.use(express.json())

const PORT = 1730

// 启动
app.listen(PORT, async () => {
  logger.info(`App is running at http://localhost:${PORT}`)
  routes(app)
})