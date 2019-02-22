import * as express from 'express'

class Portal {
  public static join(req: express.Request, res: express.Response) {
    console.log(req.ip + ' : portal')
    res.app.render('portal', {}, (err: Error, html: string): void => {
      if (err) {
        console.dir(err.stack)
      }
      res.end(html)
    })
  }
}

export default Portal