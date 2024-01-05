import { Router } from 'express';
import userController from '../controllers/usersController.js'

const router = new Router();

router.get('/all', userController.getUsers)

export default router;
