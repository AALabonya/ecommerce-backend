import { Router } from 'express';
import { OrderController } from './orders.controller';

const router = Router();

router.post('/', OrderController.createOrder);
router.get('/', OrderController.getAllOrders);

export const OrderRouter = router;
