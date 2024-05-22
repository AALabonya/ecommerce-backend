import { Request, Response } from 'express';
import { TOrder } from './orders.interface';
import { OrderService } from './orders.service';
import orderValidationSchema from './orders.validation';

const createOrder = async (req: Request, res: Response) => {
    const orders = req.body;

    try {
        const value = orderValidationSchema.parse(orders);
        const order = await OrderService.createOrder(value as TOrder);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: order,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something Went Wrong',
            error: error,
        });
    }
};

const getAllOrders = async (req: Request, res: Response) => {
    try {
        const search: { email?: string } = {};
        if (req.query.email) {
            search.email = req.query.email as string;
        }
        const orders = await OrderService.getAllOrders(search);
        res.status(200).json({
            success: true,
            message: 'Orders fetched successfully!',
            data: orders,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Order not found',
            error: error,
        });
    }
};

export const OrderController = { createOrder, getAllOrders };
