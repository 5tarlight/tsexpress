import * as express from 'express'

class Server {
  public app: express.Application

  constructor() {
    this.app = express()
    this.config()
    this.route()
  }

  public config(): void {

  }

  public route(): void {
    this.app.get('/', (req: express.Request, res: express.Response): void => {
      res.send('Hello World!');
    });
  }
}

export default Server