import express from 'express'
import routes from './routes'
import logger from './utils/logger'
import path from 'path'
import cors from 'cors'


const app = express()

app.use(cors())
app.set('views', path.join(__dirname, './views'))
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')
app.use(express.json())

const PORT = 5173

// 启动
app.listen(PORT, async () => {
  routes(app)
})

export default app