import express from 'express';
import { getAllMovies, createMovie, updateMovie, deleteMovie } from '../controllers/movieController.js';

const router = express.Router();

router.get('/', getAllMovies);
router.post('/', createMovie);
router.put('/:movieId' , updateMovie);
router.delete('/:movieId' , deleteMovie);

export default router;