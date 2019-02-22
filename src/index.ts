import * as express from 'express'
const app = express();

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Hello World!');
});

app.listen(80, (): void => {
  console.log('Server On!');
});