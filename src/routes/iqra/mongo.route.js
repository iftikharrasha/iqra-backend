const express = require('express');
const router = express.Router()
const mongoControllers = require('../../controllers/iqra/mongo.controller');
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");

// base route: /api/iqra/mongo

router
.route('/surah')
.get(mongoControllers.getMongoSurah)
.post(authentication, authorization("master"), mongoControllers.surahBulkUpload)

router
.route('/ayat')
.get(mongoControllers.getMongoAyat)
.post(authentication, authorization("master"), mongoControllers.ayatBulkUpload)

module.exports = router;