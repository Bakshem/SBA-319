import express from 'express';
import connectDB from './src/data/conn.js'
import actorRoutes from './src/routes/actorRoutes.js';
import genreRoutes from './src/routes/genreRoutes.js';
import movieRoutes from './src/routes/movieRoutes.js';
import data from './src/data/MOCK_DATA.json' assert {type: "json"}

const app = express ();
const PORT = 3000;

connectDB();

app.use(express.json());

app.use('/actors', actorRoutes);
app.use('/genres', genreRoutes);
app.use('/movies', movieRoutes);

app.get('/', (req,res) =>
    res.send(`Welcome to the Movie API!`)
//    res.json(data)
);

// app.post('/create', (req,res) => {
//     res.send('This is a POST request at /create')
// });

// app.put('/edit', (req,res) => {
//     res.send('This is a PUT request at /edit')
// });

// app.delete('/delete', (req,res) => {
//     res.send('This is a DELETE request at /delete')
// });

app.use((err, req, res, next) => {
    console.error("An error occurred: ", err.message);
    res.status(500).json({ message: "An internal server error occurred."})
})
app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);