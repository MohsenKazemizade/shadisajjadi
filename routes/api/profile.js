const express = require('express');
const router = express.Router();

// @rout     Get api/profile
// @desc     Test rout
// @access   Public
router.get('/', (req, res) => res.send('Profile rout'));

module.exports = router;
