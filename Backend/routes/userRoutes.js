import express from "express";
const userRouter = express.Router()
import { registerUser, loginUser, getUser } from "../controllers/userControllers.js";

userRouter.post('/', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/user', getUser)
export default userRouter