import { Router } from 'express';
import themesController from '../controllers/themesController.js'

const router = new Router();

router.get('/', themesController.getThemes)

export default router;