import 'dotenv/config'
import connectDB from './utils/connectDB';
const currentTime = new Date().toLocaleTimeString('en-US', { weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true})

import app from './app'

connectDB();

app.listen(process.env.PORT, ()=>console.log(`🔥 Server running on http:localhost:${process.env.PORT}/ at ${currentTime}`))