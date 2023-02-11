const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/home',homeController.home);

router.get('/save-user',homeController.saveUser);

module.exports = router;
