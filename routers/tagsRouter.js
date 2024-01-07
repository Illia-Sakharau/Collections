import { Router } from 'express';
import tagsController from '../controllers/tagsController.js'

const router = new Router();

router.get('/all', tagsController.getTags)

export default router;