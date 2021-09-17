const router = require('express').Router();

const { usersController } = require('../controllers');

// POST /users/login
router.post('/login', usersController.login.post);

// GET /users/logout
router.get('/logout', usersController.logout.get);

// GET /users/userinfo
router.get('/userinfo', usersController.userinfo.get);

module.exports = router;
