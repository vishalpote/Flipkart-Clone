import express from "express";
import { getOneProduct, productData } from "../controller/product.controller.js";
const ProductRouter = express.Router();

ProductRouter.get("/", productData);
ProductRouter.get("/:id", getOneProduct);;
export default ProductRouter;
