import * as express from 'express'

const app = express()

app.get('/', (req, res): void => {
  res.send("Hello World!")
})

app.listen(80, (): void => {
  console.log('server on!')
})