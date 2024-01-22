import { Router } from 'express';
import userController from '../controllers/usersController.js'
import adminMiddleware from '../middleware/adminMiddleware.js'

const router = new Router();

router.get('/all', adminMiddleware, userController.getUsers)
router.delete('/delete', adminMiddleware, userController.deleteUsers)
router.post('/state', adminMiddleware, userController.changeState)

export default router;
