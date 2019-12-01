const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home Page');
});

router.get('/blogs', (req, res) => {
    res.send('Blog List Page');
});

module.exports = router;