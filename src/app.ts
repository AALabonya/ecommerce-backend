import express, {
    Application,
    NextFunction,
    Request,
    Response,
    Router,
} from 'express';

import cors from 'cors';
import { ProductsRoute } from './app/modules/products/product.route';
import { ordersRoute } from './app/order/orders.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductsRoute);
app.use('/api/orders', ordersRoute);

app.get('/', (req: Request, res: Response) => {
    // res.send('Hello World!');
    res.send(200).json({
        status: true,
        message: 'Server running successfully',
    });
});

export default app;
