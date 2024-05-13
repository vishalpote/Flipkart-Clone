import express from 'express';
import { userLogin, usersignup } from '../controller/user-controller.js';
const router=express.Router();



router.post('/signup',usersignup);
router.post('/login',userLogin);

export default router;