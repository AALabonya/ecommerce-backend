import { Schema, model } from 'mongoose';
import { TInventory, TProducts, TVariants } from './product.interface';

const variantsSchema = new Schema<TVariants>(
    {
        type: {
            type: String,
            required: [true, 'Type type is required'],
        },
        value: {
            type: String,
            required: [true, 'Value value is required'],
        },
    },
    {
        _id: false,
        versionKey: false,
    },
);

const inventorySchema = new Schema<TInventory>(
    {
        quantity: {
            type: Number,
            required: [true, ' Quantity is required'],
        },
        inStock: {
            type: Boolean,
            default: true,
            required: [true, 'InStock is required'],
        },
    },
    {
        _id: false,
        versionKey: false,
    },
);

const productsSchema = new Schema<TProducts>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
        },
        price: {
            type: Number,
            required: [true, 'Price is required'],
        },
        category: {
            type: String,
            required: [true, 'Category is required'],
        },
        tags: {
            type: [String],
            required: [true, 'tags is required'],
        },
        variants: {
            type: [variantsSchema],
            required: [true, 'Variants is required'],
        },
        inventory: {
            type: inventorySchema,
            required: [true, 'Inventory is required'],
        },
    },
    {
        versionKey: false,
    },
);

export const productsModel = model<TProducts>('products', productsSchema);
