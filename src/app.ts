import express, {
    Application,
    NextFunction,
    Request,
    Response,
    Router,
} from 'express';

import cors from 'cors';
import { ProductsRoute } from './app/modules/products/product.route';
import { OrderRouter } from './app/order/orders.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductsRoute);
app.use('/api/orders', OrderRouter);

app.get('/', (req: Request, res: Response) => {
    // res.send('Hello World!');
    res.send(200).json({
        status: true,
        message: 'Server running successfully',
    });
});

// not found route
app.get('*', (req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});

export default app;
