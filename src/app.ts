import express, { Application, Request, Response, Router } from 'express';

import cors from 'cors';
import { ProductsRoute } from './app/modules/products/product.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductsRoute);

app.get('/', (req: Request, res: Response) => {
    // res.send('Hello World!');
    res.send(200).json({
        status: true,
        message: 'Server running successfully',
    });
});

export default app;
