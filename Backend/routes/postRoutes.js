import express from "express";
const router = express.Router();
import protect from "../middleware/authMiddleware.js";
import { getPost, createPost, updatePost, deletePost, getSpecificPost } from "../controllers/postControllers.js";


router.route('/').get(protect, getPost).post(protect, createPost)


router.route('/:id').get(protect, getSpecificPost).put(protect, updatePost).delete(protect, deletePost)


export default router;
