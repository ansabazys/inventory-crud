import type { Request, Response } from "express";
import type { ProductService } from "../service/product-service.ts";

export class ProductController {
  private service;
  constructor(service: ProductService) {
    this.service = service;
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const products = await this.service.getAll();
      if (products.length < 1) {
        res.status(404).json({ message: "products is not found" });
        return;
      }
      res.status(200).json(products);
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  };

  getOne = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "product id is required" });
        return;
      }

      const product = await this.service.get(id);
      if (!product) {
        res.status(404).json({ message: "product is not found" });
        return;
      }
      res.status(200).json(product);
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const product = await this.service.create(req.body);
      if (!product) {
        res.status(404).json({ message: "product is not created!" });
        return;
      }
      res.status(200).json({ message: "product is created successfully" });
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "product id is required" });
        return;
      }

      await this.service.update(id, req.body);
      const product = await this.service.get(id);

      if (!product) {
        res.status(404).json({ message: "product is not updated!" });
        return;
      }

      product?.quantity === 0
        ? (product.stock = false)
        : (product.stock = true);
        
      await product.save();
      res.status(200).json({ message: "product updated successfully" });
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: "product id is required" });
        return;
      }

      const product = await this.service.delete(id);
      if (!product) {
        res.status(404).json({ message: "product is not deleted!" });
        return;
      }
      res.status(200).json({ message: "product deleted successfully" });
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  };
}
