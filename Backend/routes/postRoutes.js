import express from "express";
const router = express.Router();
import { getPost, createPost, updatePost, deletePost, getSpecificPost } from "../controllers/postControllers.js";


router.get('/', getPost)
router.get('/:id', getSpecificPost)
router.post('/', createPost);

router.put('/:id', updatePost)
router.delete('/:id', deletePost)
export default router;
