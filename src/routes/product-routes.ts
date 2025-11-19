import express, { Router } from "express";
import { ProductRepository } from "../repository/product-repository.ts";
import { ProductService } from "../service/product-service.ts";
import { ProductController } from "../controllers/product-controller.ts";

const router: Router = express.Router();

const repo = new ProductRepository();
const service = new ProductService(repo);
const controller = new ProductController(service);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.delete("/:id", controller.delete);
router.put("/:id", controller.update);


export default router;
