const Ayat = require("../../models/iqra/ayat.model");
const Surah = require("../../models/iqra/surah.model");

const getHomePageService = async () => {
    // Get 1 random Ayat
    const random = await Ayat.aggregate([
        { $match: { featured: true } },
        { $sample: { size: 1 } },
        { 
            $project: { 
                _id: 1, 
                no: 1, 
                para: 1, 
                ar: 1, 
                bn: 1, 
            } 
        }
    ]);

    // Get 5 random Surah
    const featured = await Surah.aggregate([
        { $match: { featured: true } },
        { $sample: { size: 5 } },
        { 
            $project: { 
                _id: 1, 
                no: 1, 
                para: 1, 
                name_en: 1, 
                name_ar: 1, 
                name_bn: 1, 
                totalAyat: 1, 
            } 
        }
    ]);

    return {
        random: random[0] || null, 
        featured: featured
    };
};


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
    getHomePageService,
    getSurahPageService,
    getAyatsPageService,
    getTafsirPageService,
}