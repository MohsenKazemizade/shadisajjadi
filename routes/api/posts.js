const express = require('express');
const router = express.Router();

// @rout     Get api/posts
// @desc     Test rout
// @access   Public
router.get('/', (req, res) => res.send('Posts rout'));

module.exports = router;
