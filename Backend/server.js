import { config } from 'dotenv';
import express from "express";
import color from 'colors'
import errorHandler from "./middleware/errorMiddleware.js";
import router from "./routes/postRoutes.js";
import userRouter from "./routes/userRoutes.js";
import connectDB from './config/db.js';
config();

connectDB()

const port = process.env.PORT
const app = express();

// body parse middleware

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/post', router);
app.use('/api/users', userRouter);
//error handler
app.use(errorHandler)


app.listen(port, () => {
    console.log(`${port}`.red);
});
