import mongoose from 'mongoose';

let isConnected = false;

export const dbConnection = async () => {
    if (isConnected) { 
        console.log("Database is already connected!");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;

        console.log("MongoDB connected");
        
    } catch (error) {
        console.log(error);
    }
}