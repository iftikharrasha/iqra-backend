const Ayat = require("../../models/iqra/ayat.model");
const Surah = require("../../models/iqra/surah.model");

const getSurahPageService = async (id) => {
    const surah = await Surah.findById(id)
        .select('_id no para name_en name_ar name_bn ruku place ayat totalAyat fazilat naming shanenuzul tika quote')
        .populate({
            path: 'ayat',
            select: '_id no para ar bn tika shanenuzul quote',
            options: { limit: 1 }
        });

    return surah;
};

const getAyatsPageService = async (id) => {
    const surah = await Surah.findById(id)
        .select('_id no para name_en name_ar name_bn ayat totalAyat')
        .populate({
            path: 'ayat',
            select: '_id no para ar bn tika shanenuzul quote'
        });

    return surah;
};

const getTafsirPageService = async (id, aid) => {
    const surah = await Surah.findById(id)
        .select('_id no para name_en name_ar name_bn ayat')
        .populate({
            path: 'ayat',
            match: { _id: aid }, 
            select: '_id no para ar bn tafsir'
        });

    return surah;
};

module.exports = {
    getSurahPageService,
    getAyatsPageService,
    getTafsirPageService,
}