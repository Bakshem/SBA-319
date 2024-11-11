import express from 'express';
import { getAllGenres, createGenre } from '../controllers/genreController.js';

const router = express.Router();

router.get('/', getAllGenres);
router.post('/', createGenre);

export default router;