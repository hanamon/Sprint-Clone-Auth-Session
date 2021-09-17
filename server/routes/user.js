const router = require('express').Router();

const { userConroller } = require('../controllers');

// POST /users/login
router.post('/login', userConroller.login.post);

// POST /users/logout
router.post('/logout', userConroller.logout.post);

// GET /users/userinfo
router.post('/userinfo', userConroller.userinfo.get);

module.exports = router;
