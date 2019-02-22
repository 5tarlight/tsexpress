import Server from './server'

const app = new Server().app

app.listen(80, (): void => {
  console.log('Server On')
})