import mongoose from "mongoose";

const connectDB = async () => {
    const connection = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`🟢 Mongo db connected`);
};

export default connectDB