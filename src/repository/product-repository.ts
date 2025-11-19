import { ProductModel, type Product } from "../models/product.ts";

export class ProductRepository {
  getAll(): Promise<Product[]> {
    return ProductModel.find();
  }

  getById(id: string): Promise<Product | null> {
    return ProductModel.findById(id);
  }

  create(data: Partial<Product>): Promise<Product> {
    return ProductModel.create(data);
  }

  update(id: string, data: Partial<Product>): Promise<Product | null> {
    return ProductModel.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id: string): Promise<Product | null> {
    return ProductModel.findByIdAndDelete(id)
  }
}
