import Movie from '../models/movie.js';

const getAllMovies = async (req, res) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  const createMovie = async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        year: req.body.year,
        genres: req.body.genres,
        directors: req.body.director,
        cast: req.body.cast,
    });
    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    }  catch (err) {
        res.status(400).json({ message: err.message});
    }
};

const updateMovie = async (req, res) => {
    try {
      const { movieId } = req.params;
      const update = req.body;
      const movie = await Movie.findByIdAndUpdate(movieId, update, { new: true });
      res.json(movie);
    } catch (err) {
      res.status(400).json({ message: 'Error updating movie', error: err });
    }
  };
  
const deleteMovie = async (req, res) => {
    try {
      const { movieId } = req.params;
      await Movie.findByIdAndDelete(movieId);
      res.status(204).json({ message: 'Movie deleted' });
    } catch (err) {
      res.status(400).json({ message: 'Error deleting movie', error: err });
    }
  };

export { getAllMovies, createMovie, updateMovie, deleteMovie };