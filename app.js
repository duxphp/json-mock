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

app.all('*',function(req,res,next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header('Access-Control-Allow-Methods','*');
  res.header("Access-Control-Allow-Headers","*");
  next();
})

app.set('views', join(__dirname, './views'))
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')
app.use(express.json())

app.listen(5120, async () => {
  routes(app)
})
