const express = require('express');
const router = express.Router();

// Blog Model
const Blog = require('./../model/Blog');

// Get All Blogs
router.get('/blogs', async (req, res) => {
    try {
        const posts = await Blog.find();
        res.json(posts);
    } catch (error) {
        res.status(400).json({ message: error });
    }

})

// Create Blog
router.post('/blog', async (req, res) => {
    const post = new Blog({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    })
    try {
        const savePost = await post.save();
        res.json(savePost);
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

// Get Specific Post
router.get("/blog/:blogId", async (req, res) => {
    try {
        const post = await Blog.findById(req.params.blogId);
        res.json(post);
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

// Delete Post
router.delete("/blog/:blogId", async (req, res) => {
    try {
        const deletePost = await Blog.remove({ _id: req.params.blogId });
        res.json(deletePost);
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

// Patch/Update Post
router.patch("/blog/:blogId", async (req, res) => {
    try {
        const updatedPost = await Blog.updateOne(
            { _id: req.params.blogId },
            { $set: { title: req.body.title } }
        );
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

module.exports = router;