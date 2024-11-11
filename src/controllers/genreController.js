import Genre from '../models/genre.js';

const getAllGenres = async (req, res) => {
    try {
      const genres = await Genre.find();
      res.json(genres);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  const createGenre = async (req, res) => {
    const genre = new Genre({
        name: req.body.name,
    });
    try {
        const newGenre = await genre.save();
        res.status(201).json(newGenre);
    }  catch (err) {
        res.status(400).json({ message: err.message});
    }
}

export { getAllGenres, createGenre };