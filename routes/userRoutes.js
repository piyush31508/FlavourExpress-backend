import express from 'express';
import { loginUser, verifyUser, userProfile } from '../controller/userController.js';
import { isAuth } from '../middleware/isAuth.js';

const router = express.Router();



router
.post('/login', loginUser)
.post('/verify', verifyUser)
.get('/me', isAuth, userProfile)
;

export default router;