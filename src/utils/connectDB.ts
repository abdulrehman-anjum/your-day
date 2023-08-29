import mongoose from "mongoose";

const currentTime = new Date().toLocaleTimeString('en-US', { weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true})

const connectDB = async () => {
    const connection = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`🟢 Mongo db connected at ${currentTime}`);
};

export default connectDB