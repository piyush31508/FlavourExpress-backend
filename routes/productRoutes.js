import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controller/productController.js';
import express from 'express';


const router = express.Router();

router
.post('/create', createProduct)
.get('/all', getAllProducts)
.get('/:id', getProductById)
.put('/:id', updateProduct)
.delete('/:id', deleteProduct)
;

export default router;