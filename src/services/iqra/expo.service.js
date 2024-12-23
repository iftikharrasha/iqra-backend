const Ayat = require("../../models/iqra/ayat.model");
const Surah = require("../../models/iqra/surah.model");

const getSingleAyatTafsirService = async (id, aid) => {
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
    getSingleAyatTafsirService,
}