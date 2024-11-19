import express from 'express';
import { orderIDGeneration, getStatus } from '../controller/paymentController.js';


const router = express.Router();

router
.post('/order', orderIDGeneration)
.get('/status/:id', getStatus)

;

export default router;