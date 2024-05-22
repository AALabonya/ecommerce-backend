import { TOrders } from './orders.interface';
import { OrderModel } from './orders.model';

const createOrder = async (order: TOrders) => {
    const result = await OrderModel.create(order);
    return result;
};

// get order
const getOrder = async (email: string) => {
    if (email) {
        const result = await OrderModel.find({ email });
        return result;
    } else {
        const result = await OrderModel.find();
        return result;
    }
};

export const orderService = {
    createOrder,
    getOrder,
};
