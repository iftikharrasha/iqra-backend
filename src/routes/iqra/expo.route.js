const express = require('express');
const router = express.Router()
const expoControllers = require('../../controllers/iqra/expo.controller');
const validateParams = require("../../middlewares/validateParams");
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");

// base route: /api/iqra/expo

router
.route('/ayat/:id')
.get(validateParams, expoControllers.getAyatsPage)

router
.route('/tafsir/:id/:aid')
.get(validateParams, expoControllers.getTafsirPage)

module.exports = router;