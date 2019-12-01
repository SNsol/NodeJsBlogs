const express = require('express');
const router = express.Router();

// User Model
const User = require('./../model/User');

// Create Blog
router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const saveUser = await user.save();
        res.json(saveUser);
    } catch (error) {
        res.status(400).json({ message: error });
    }
});