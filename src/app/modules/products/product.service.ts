import { TProducts } from './product.interface';
import { productsModel } from './product.model';

// create product
const createProduct = async (product: TProducts) => {
    const result = await productsModel.create(product);

    return result;
};

// get all products
const getAllProduct = async (searchTerm: string) => {
    if (searchTerm) {
        const result = await productsModel.find({
            name: { $regex: searchTerm, $options: 'i' },
        });
        return result;
    } else {
        const result = await productsModel.find();
        return result;
    }
};
// get single  product
const getSingleProduct = async (id: string) => {
    const result = await productsModel.findById(id);
    return result;
};

// update product
const updateProductById = async (id: string, productData: TProducts) => {
    const updatedProduct = await productsModel.findByIdAndUpdate(
        id,
        productData,
        { new: true },
    );
    if (updatedProduct) {
        return { product: updatedProduct, updated: true };
    } else {
        return { updated: false };
    }
};

// delete product
const deleteProductById = async (id: string) => {
    const result = await productsModel.findByIdAndDelete(id);
    return result;
};

export const productService = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProductById,
    deleteProductById,
};
