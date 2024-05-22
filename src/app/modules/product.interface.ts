export type Inventory = {
  quantity: Number;
  inStock: boolean;
};
export type Variants = {
  type: string;
  value: string;
};
export type TProduct = {
  name: string;
  description: string;
  price: string;
  category: string;
  tags: [];
  variants: Variants[];
  inventory: Inventory;
};
