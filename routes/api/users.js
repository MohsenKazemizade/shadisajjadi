const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// @rout     post api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    body('name', 'لطفا نام خود را وارد کنید!').not().isEmpty(),
    body('email', 'لطفا آدرس ایمیل خود را به طور صحیح وارد کنید!').isEmail(),
    body(
      'password',
      'لطفا رمز عبور خود را بیش تر از ۶ کارکتر وارد کنید!'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User rout');
  }
);

module.exports = router;
