const Ayat = require("../../models/iqra/ayat.model");
const Surah = require("../../models/iqra/surah.model");

//surah
const getIqraBookService = async () => {
    const surah = await Surah.find({})
                            .populate({
                                path: 'ayat',
                            });

    return surah;
}

const createIqraSurahService = async (data) => {
    const surah = await Surah.create(data);
    return surah;
}

const getSingleIqraSurahService = async (id) => {
    const surah = await Surah.findById({ _id: id })
                            .populate({
                                path: 'ayat',
                            });

    const totalAyatAdded = surah.ayat.length; 

    return {
        ...surah.toObject(), 
        totalAyatAdded
    };
}

const deleteSingleIqraSurahService = async (id) => {
    const surah = await getSingleIqraSurahService(id);
    const ayatIds = surah.ayat.map(a => a._id);

    await Ayat.deleteMany({ _id: { $in: ayatIds } });

    const result = await Surah.findByIdAndDelete({ _id: id });
    return result;
};

const updateSingleIqraSurahService = async (id, data) => {
    const surah = await Surah.findOneAndUpdate({ _id: id }, data);
    return surah;
};

//ayat
const createIqraAyatService = async (id, data) => {
    const surahExists = await Surah.findById(id);
    if (!surahExists) {
        console.log(`Surah with ID ${id} does not exist.`);
        return false; 
    }

    const ayat = await Ayat.create(data);
    const surah = await Surah.findByIdAndUpdate(
        id,
        { 
            $push: { 'ayat': ayat._id }
        },
        { new: true }
    );

    return ayat;
};


const getSingleIqraAyatService = async (id) => {
    const ayat = await Ayat.findById({ _id: id })
    return ayat;
}

const deleteSingleIqraAyatService = async (id) => {
    const ayat = await Ayat.findByIdAndDelete({ _id: id });
    return ayat;
};

const updateSingleIqraAyatService = async (id, data) => {
    const ayat = await Ayat.findOneAndUpdate({ _id: id }, data);
    return ayat;
};

//tafsir
const addSingleIqraAyatTafsirService = async (id, data) => {
    const ayat = await Ayat.findOneAndUpdate(
        { _id: id },
        { $push: { 'tafsir': data.tafsir } },
        { new: true } 
    );
    return ayat; 
};

//reset
const deleteIqraBookService = async () => {
    const surah = await Surah.deleteMany({});
    const ayat = await Ayat.deleteMany({});
    return true;
}

module.exports = {
    getIqraBookService,
    createIqraSurahService,
    getSingleIqraSurahService,
    deleteSingleIqraSurahService,
    updateSingleIqraSurahService,
    createIqraAyatService,
    getSingleIqraAyatService,
    deleteSingleIqraAyatService,
    updateSingleIqraAyatService,
    deleteIqraBookService,
    addSingleIqraAyatTafsirService
}