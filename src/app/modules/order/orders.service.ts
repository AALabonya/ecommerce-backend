import { Types } from 'mongoose';
import { productsModel } from '../products/product.model';
import { TOrder } from './orders.interface';
import { OrderModal } from './orders.model';

const createOrder = async (order: TOrder) => {
    try {
        const isProductExits = await productsModel.findOne({
            _id: new Types.ObjectId(order.productId),
            'inventory.quantity': { $gte: order.quantity },
        });

        if (!isProductExits) {
            throw new Error('Insufficient quantity available in inventory');
        }
        isProductExits.inventory.quantity = isProductExits.inventory.quantity + order.quantity;

        if (isProductExits.inventory.quantity > 0) {
            isProductExits.inventory.inStock = true;
        } else {
            isProductExits.inventory.inStock = true;
        }

        await isProductExits.save();

        const result = await OrderModal.create(order);
        return result;
    } catch (error) {
        throw error;
    }
};

const getAllOrders = async (search: { email?: string }) => {
    const result = await OrderModal.find(search);
    return result;
};

export const OrderService = {
    createOrder,
    getAllOrders,
};
