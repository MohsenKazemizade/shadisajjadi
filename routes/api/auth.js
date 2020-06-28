const express = require('express');
const router = express.Router();

// @rout     Get api/auth
// @desc     Test rout
// @access   Public
router.get('/', (req, res) => res.send('Auth rout'));

module.exports = router;
