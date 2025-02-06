import express from "express";
import { addProduct, deleteProduct, getProduct, updateProduct } from "../controllers/product.controller.js";


const router = express.Router();

router.post("/", addProduct);
router.get("/", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


export default router;
