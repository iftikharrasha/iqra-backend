const express = require('express');
const router = express.Router()
const iqraControllers = require('../../controllers/iqra/iqra.controller');

// base route: /api/iqra/book

router
.route('/')
.get(iqraControllers.getIqraBook)
.delete(iqraControllers.deleteIqraBook)

router
.route('/para')
.post(iqraControllers.createIqraPara)

router
.route('/para/:id')
.get(iqraControllers.getSingleIqraPara)
.delete(iqraControllers.deleteSingleIqraPara)
.patch(iqraControllers.updateSingleIqraPara)

router
.route('/surah/:id')
.post(iqraControllers.createIqraSurah)
.get(iqraControllers.getSingleIqraSurah)
.delete(iqraControllers.deleteSingleIqraSurah)
.patch(iqraControllers.updateSingleIqraSurah)

router
.route('/ayat/:id')
.post(iqraControllers.createIqraAyat)
.get(iqraControllers.getSingleIqraAyat)
.delete(iqraControllers.deleteSingleIqraAyat)
.patch(iqraControllers.updateSingleIqraAyat)

module.exports = router;