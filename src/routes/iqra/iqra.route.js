const express = require('express');
const router = express.Router()
const iqraControllers = require('../../controllers/iqra/iqra.controller');
const validateParams = require("../../middlewares/validateParams");
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");

// base route: /api/iqra/book

router
.route('/surah')
.get(iqraControllers.getIqraBook)
.post(iqraControllers.createIqraSurah)
.delete(authentication, authorization("user"), iqraControllers.deleteIqraBook)

router
.route('/surah/:id')
.get(validateParams, iqraControllers.getSingleIqraSurah)
.patch(validateParams, iqraControllers.updateSingleIqraSurah)
.delete(authentication, authorization("user"), validateParams, iqraControllers.deleteSingleIqraSurah)

router
.route('/ayat/:id')
.post(validateParams, iqraControllers.createIqraAyat)
.get(validateParams, iqraControllers.getSingleIqraAyat)
.patch(validateParams, iqraControllers.updateSingleIqraAyat)
.delete(authentication, authorization("user"), validateParams, iqraControllers.deleteSingleIqraAyat)

module.exports = router;