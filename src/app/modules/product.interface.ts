interface Inventory {
  quantity: Number;
  inStock: boolean;
}
interface Variants {
  type: string;
  value: string;
}
export interface Product {
  name: string;
  description: string;
  price: string;
  category: string;
  tags: [];
  variants: Variants[];
  inventory: Inventory;
}
