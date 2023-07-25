import { config } from 'dotenv';
import express from "express";
import color from 'colors'
import errorHandler from "./middleware/errorMiddleware.js";
import router from "./routes/postRoutes.js";
import userRouter from "./routes/userRoutes.js";
import connectDB from './config/db.js';
import path from 'path'
import url from 'url';
import cors from 'cors'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
config();

connectDB()

const port = process.env.PORT
const app = express();

// body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Allow requests from specific origins
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://mern-orcin.vercel.app'
];

app.use(cors({
    origin: allowedOrigins
}));

// Routes
app.use('/api/post', router);
app.use('/api/users', userRouter);

// Serve static files (uncomment if needed)
// if (process.env.NODE_ENV === 'production') {
//     const __dirname = path.resolve();
//     app.use(express.static(path.join(__dirname, '/frontend/dist')));

//     app.get('*', (req, res) =>
//         res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
//     );
// } else {
//     app.get('/', (req, res) => {
//         res.send('API is running....');
//     });
// }

// Serve static files from './routes' directory (modify if needed)
app.use(express.static(path.join(__dirname, './routes')));

// Error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`${port}`.red);
});
