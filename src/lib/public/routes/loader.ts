import routes from './routes'
import * as express from 'express'

class Loader {
  public static init(app: express.Application, router: express.Router): void {
    for(let i in routes) {
      if(routes[i].type === 'get') {
        router.route(routes[i].url).get(require(routes[i].path).default[routes[i].method])
        console.log('[', routes[i].url, '] get 라우팅 경로 추가됨')
      } else {
        router.route(routes[i].url).post(require(routes[i].path)[routes[i].method])
        console.log('[', routes[i].url, '] post 라우팅 경로 추가됨')
      }
    }

    app.use(router)
  }
}

export default Loader