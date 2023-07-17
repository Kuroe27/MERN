import express from "express";
const userRouter = express.Router()
import { registerUser, loginUser, getUser } from "../controllers/userControllers.js";
import protect from "../middleware/authMiddleware.js";

userRouter.post('/', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/user', protect, getUser)
export default userRouter