import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: { type: String , required: true },
    year: { type: Number },
    genres: [ {type: String}],
    directors: [{ type: String}],
    cast: [ { type: String}],
})

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;