import mongoose from "mongoose";

const connectionString = "mongodb+srv://Bakshe:cCNiEIIeDeU4Q8Nv@mongopractice.f6xo0.mongodb.net/sample_mflix";

const connectDB = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log("Connected successfully with Mongoose");
    } catch (error) {
        console.error ("Database connection failed:" , error);
    }
};

export default connectDB;