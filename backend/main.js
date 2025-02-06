import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRouter from "./router/product.router.js"

dotenv.config()

const app = express();

const PORT = process.env.BACKEND_PORT || 5000;

app.use(express.json()); //allows us to accept json data in the req.body
app.use("/api/products", productRouter);

app.listen(PORT, () => {
    connectDB();
    console.log(`server started at http://localhost:${PORT}`)
})
