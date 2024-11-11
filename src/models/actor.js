import mongoose from "mongoose";

const actorSchema = new mongoose.Schema ({
    name: { type: String, required: true},
    nationality: { type: String },
});

const Actor = mongoose.model( 'Actor', actorSchema);

export default Actor;