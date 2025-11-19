import type { Product } from "../models/product.ts";
import type { ProductRepository } from "../repository/product-repository.ts";

export class ProductService  {
    private repo;
    constructor(repo:ProductRepository) {
        this.repo = repo
    }

    getAll(): Promise<Product[]> {
        return this.repo.getAll()
    }

    get(id: string): Promise<Product | null> {
        return this.repo.getById(id)
    }

    create(data: Partial<Product>): Promise<Product> {
        return this.repo.create(data)
    }

    update(id: string, data: Partial<Product>): Promise<Product | null> {
        return this.repo.update(id, data)
    }

    delete(id: string): Promise<Product | null> {
        return this.repo.delete(id)
    }

}