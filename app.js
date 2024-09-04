import express from 'express'
import routes from './routes/index.js'
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import cors from 'cors'
import { createRequire } from 'module';
const require = createRequire(import.meta.url)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use(cors())
app.set('views', join(__dirname, './views'))
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')
app.use(express.json())

app.listen(3000, async () => {
  routes(app)
})
