import express, { Application, Request, Response, Router } from 'express';

const app: Application = express();

const route = Router();
//all route
app.use('/api/products', route);

app.get('/', (req: Request, res: Response) => {
  // res.send('Hello World!');
  res
    .status(200)
    .json({ status: true, message: 'Server running successfully' });
});

export default app;
