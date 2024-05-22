import { Schema, model } from 'mongoose';
import { Inventory, TProduct, Variants } from './product.interface';
import { boolean } from 'zod';

const variantsSchema = new Schema<Variants>(
  {
    type: { type: String, required: true },
    value: { type: String, required: true },
  },
  {
    _id: false,
    versionKey: false,
  },
);

const inventorySchema = new Schema<Inventory>(
  {
    quantity: { type: String, required: true },
    inStock: { type: Boolean, required: true },
  },
  {
    _id: false,
    versionKey: false,
  },
);

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    tags: { type: [], required: true },
    variants: variantsSchema,
    inventory: inventorySchema,
  },
  {
    versionKey: false,
  },
);

export const Products = model<TProduct>('product', productSchema);
