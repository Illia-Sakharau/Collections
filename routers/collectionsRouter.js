import { Router } from 'express';
import collectionsController from '../controllers/collectionsController.js'
import adminMiddleware from '../middleware/adminMiddleware.js'

const router = new Router();

router.get('/all', adminMiddleware, collectionsController.getAllCollections)

export default router;