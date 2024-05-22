import { Types } from 'mongoose';
import { TOrder } from './orders.interface';
import { productsModel } from '../modules/products/product.model';
import { OrderModal } from './orders.model';

const createOrder = async (order: TOrder) => {
    try {
        const findProduct = await productsModel.findOne({
            _id: new Types.ObjectId(order.productId),
            'inventory.quantity': { $gte: order.quantity },
        });

        if (findProduct === null) {
            throw new Error('Insufficient quantity available in inventory');
        }
        findProduct.inventory.quantity -= order.quantity;
        findProduct.inventory.inStock = findProduct.inventory.quantity > 0;

        await findProduct.save();

        const result = await OrderModal.create(order);
        return result;
    } catch (error) {
        throw error;
    }
};

const getAllOrders = async (search: { email?: string }) => {
    const result = await OrderModal.find(search);
    if (result.length <= 0) {
        throw new Error('Order not found');
    }
    return result;
};

export const OrderService = {
    createOrder,
    getAllOrders,
};
