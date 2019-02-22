import * as express from 'express'
import * as parser from 'body-parser'
import * as cors from 'cors'
import * as path from 'path'
import Loader from './lib/public/routes/loader'

class Server {
  public app: express.Application

  constructor() {
    this.app = express()
    this.config()
    this.route()
  }

  public config(): void {
    this.app.set('views', path.join(__dirname, '/../src/lib/public/routes/views'))
    this.app.set('view engine', 'pug')

    this.app.use(parser.urlencoded({ extended: false }))
    this.app.use(parser.json())
    this.app.use(cors())
    this.app.use('/', express.static(path.join(__dirname, '/../src/lib/public')))
  }

  public route(): void {
    Loader.init(this.app, express.Router())
  }
}

export default Server