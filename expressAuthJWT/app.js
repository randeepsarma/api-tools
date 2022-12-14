import dotenv from 'dotenv'
dotenv.config()


import express  from "express";

import connectDB from "./config/connectdb.js";
import web from './routes/userRoutes.js'
import cors from 'cors'
const app =express()
app.use(cors())

const port =process.env.PORT 

const DATABASE_URL = process.env.DATABASE_URL 

//Database connection
connectDB(DATABASE_URL)

//Middleware for json
app.use(express.json())

//Load Routes
app.use("/api/user",web)

app.listen(port, ()=>[
    console.log(`Server listening on http://localhost:${port}`)
])

