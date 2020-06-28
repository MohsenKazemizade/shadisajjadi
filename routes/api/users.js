const express = require('express');
const router = express.Router();

// @rout     Get api/users
// @desc     Test rout
// @access   Public
router.get('/', (req, res) => res.send('Users rout'));

module.exports = router;
