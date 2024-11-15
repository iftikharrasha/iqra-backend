const Ayat = require("../../models/iqra/ayat.model");
const Surah = require("../../models/iqra/surah.model");
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
//surah
const getMongoSurahService = async () => {
    const surah = await Surah.find({})
    return surah;
}

const surahBulkUploadService = async (data) => {
    const surah = await Surah.insertMany(data);
    return surah;
}

//ayat
const getMongoAyatService = async () => {
    const ayat = await Ayat.find({})
    return ayat;
}

const ayatBulkUploadService = async (data) => {
    const ayat = await Ayat.insertMany(data);
    return ayat;
}

module.exports = {
    getMongoSurahService,
    surahBulkUploadService,
    getMongoAyatService,
    ayatBulkUploadService,
}