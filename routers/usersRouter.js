import { Router } from 'express';
import userController from '../controllers/usersController.js'
import adminMiddleware from '../middleware/adminMiddleware.js'

const router = new Router();

router.get('/all', adminMiddleware, userController.getUsers)
router.delete('/delete', adminMiddleware, userController.deleteUsers)
router.patch('/update', adminMiddleware, userController.updateUser)

export default router;
