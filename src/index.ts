import 'dotenv/config'
import connectDB from './utils/connectDB';

import app from './app'

connectDB();

app.listen(process.env.PORT, ()=>console.log(`🔥 Server running at http:localhost:${process.env.PORT}/`))