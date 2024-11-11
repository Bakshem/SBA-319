import Actor from '../models/actor.js';

const getAllActors = async (req,res) => {
    try {
        const actors = await Actor.find();
        res.json(actors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createActor = async (req,res) => {
    const actor = new Actor ({
        name: req.body.name,
        nationality: req.body.nationality,
    });
    try {
        const newActor = await actor.save();
        res.status(201).json(newActor);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

export { getAllActors, createActor };