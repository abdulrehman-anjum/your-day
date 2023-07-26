// import 'dotenv/config'
import app from './app'
import mongoose from 'mongoose';

const connectDB = async () => {
  const connection = await mongoose.connect("mongodb://127.0.0.1:27017/yourdayDB?retryWrites=true&w=majority");
  console.log(`🟢 Mongo db connected:`, connection.connection.host);
}; 
connectDB();
 
app.listen(3000, ()=> console.log("🔥 Server running at http:localhost:3000/"))