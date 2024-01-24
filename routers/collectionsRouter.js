import { Router } from 'express';
import collectionsController from '../controllers/collectionsController.js'
import adminMiddleware from '../middleware/adminMiddleware.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = new Router();

router.get('/all', adminMiddleware, collectionsController.getAllCollections)
router.get('/my', authMiddleware, collectionsController.getMyCollections)
router.get('/biggest', collectionsController.getBigestCollections)
router.delete('/delete', authMiddleware, collectionsController.deleteCollections)

export default router;