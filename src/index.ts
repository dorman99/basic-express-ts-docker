import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { hello } from './some';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server!! ' + hello()) ;
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});