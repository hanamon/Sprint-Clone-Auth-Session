const router = require('express').Router();

const { usersController } = require('../controllers');

// POST /users/login
router.post('/login', usersController.login.post);

// POST /users/logout
router.post('/logout', usersController.logout.post);

// GET /users/userinfo
router.post('/userinfo', usersController.userinfo.get);

module.exports = router;
