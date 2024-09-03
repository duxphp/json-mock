import express from 'express'
import routes from './src/routes'
import logger from './src/utils/logger'
import path from 'path'
import cors from 'cors'


const app = express()

app.use(cors())
app.set('views', path.join(__dirname, './src/views'))
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')
app.use(express.json())

const PORT = 3000

// 启动
app.listen(PORT, async () => {
  routes(app)
})

exports.app = app