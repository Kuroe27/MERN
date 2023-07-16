import asyncHandler from 'express-async-handler';
import Post from '../model/postModel.js';

const getSpecificPost = asyncHandler(async (req, res) => {
    const SpecificPost = await Post.findById(req.params.id)
    res.status(200).json(SpecificPost)
})

const getPost = asyncHandler(async (req, res) => {
    const post = await Post.find()
    res.status(200).json(post);
})

const createPost = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("complete the data")
    }
    const post = await Post.create({
        text: req.body.text,
    })
    res.status(200).json(post);
})


const updatePost = asyncHandler(async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedPost) {
        res.status(400);
        throw new Error("Post not found");
    }

    res.status(200).json(updatedPost);
});

const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post) {
        res.status(400)
        throw new Error("Post not found")
    }

    await Post.deleteOne({ _id: req.params.id })

    res.status(200).json({
        id: req.params.id
    });
})


export { createPost, deletePost, getPost, updatePost, getSpecificPost };

