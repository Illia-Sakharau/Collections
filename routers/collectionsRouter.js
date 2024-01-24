import { Router } from 'express';
import collectionsController from '../controllers/collectionsController.js'
import adminMiddleware from '../middleware/adminMiddleware.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = new Router();

router.get('/all', adminMiddleware, collectionsController.getAllCollections)
router.get('/my', authMiddleware, collectionsController.getMyCollections)

export default router;