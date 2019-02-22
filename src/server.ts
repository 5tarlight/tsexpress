import * as express from 'express'
import * as parser from 'body-parser'
import * as cors from 'cors'
import * as path from 'path'

class Server {
  public app: express.Application

  constructor() {
    this.app = express()
    this.config()
    this.route()
  }

  public config(): void {
    this.app.use(parser.urlencoded({ extended: false }))
    this.app.use(parser.json())
    this.app.use(cors())
    this.app.use('/', express.static(path.join(__dirname, '/../src/lib/public')))
  }

  public route(): void {
    this.app.get('/', (req: express.Request, res: express.Response): void => {
      res.send('Hello World!');
    });
  }
}

export default Server