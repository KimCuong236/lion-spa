import express from 'express';
import { getAllServices, getServicesByCategory, searchServices } from '../controllers/serviceController.js';

const router = express.Router();

router.get('/services', getAllServices);
router.get('/services/category/:category', getServicesByCategory);
router.get('/services/search', searchServices);

export default router;