const express = require('express');
const router = express.Router()
const iqraControllers = require('../../controllers/iqra/iqra.controller');
const validateParams = require("../../middlewares/validateParams");
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");

// base route: /api/iqra/book

router
.route('/')
.get(iqraControllers.getIqraBook)
.delete(authentication, authorization("user"), iqraControllers.deleteIqraBook)

router
.route('/para')
.post(iqraControllers.createIqraPara)

router
.route('/para/:id')
.get(validateParams, iqraControllers.getSingleIqraPara)
.delete(authentication, authorization("user"), validateParams, iqraControllers.deleteSingleIqraPara)
.patch(validateParams, iqraControllers.updateSingleIqraPara)

router
.route('/surah/:id')
.post(validateParams, iqraControllers.createIqraSurah)
.get(validateParams, iqraControllers.getSingleIqraSurah)
.delete(authentication, authorization("user"), validateParams, iqraControllers.deleteSingleIqraSurah)
.patch(validateParams, iqraControllers.updateSingleIqraSurah)

router
.route('/ayat/:id')
.post(validateParams, iqraControllers.createIqraAyat)
.get(validateParams, iqraControllers.getSingleIqraAyat)
.delete(authentication, authorization("user"), validateParams, iqraControllers.deleteSingleIqraAyat)
.patch(validateParams, iqraControllers.updateSingleIqraAyat)

module.exports = router;