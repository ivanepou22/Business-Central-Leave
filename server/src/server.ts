import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();
const app: express.Application = express();
const PORT = process.env.PORT;
const address: string = `127.0.0.1:${PORT}`;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', function (_req: Request, res: Response) {
  res.send('Hello Business Central');
});

app.use('/api/v1', routes);

app.listen(PORT, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
