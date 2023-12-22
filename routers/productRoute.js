import { Router } from "express";
import { createProduct, getProducts } from "../controllers/productController.js";

const router = Router();

router.post("/product", createProduct);
router.get("/product", getProducts);



export {router};