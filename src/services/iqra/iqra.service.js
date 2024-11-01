const Ayat = require("../../models/iqra/ayat.model");
const Para = require("../../models/iqra/para.model");
const Surah = require("../../models/iqra/surah.model");

const getIqraBookService = async () => {
    const para = await Para.find({})
                            .populate({
                                path: 'surah',
                                populate: {
                                    path: 'ayat',
                                }
                            });
    
    // const enrichedPara = para.map(p => {
    //     const totalSurahAdded = p.surah.length; 
    //     const totalAyatAdded = p.surah.reduce((sum, s) => sum + s.ayat.length, 0);

    //     return {
    //         ...p.toObject(), 
    //         totalSurahAdded,
    //         totalAyatAdded
    //     };
    // });

    return para;
}

//para
const createIqraParaService = async (data) => {
    const para = await Para.create(data);
    return para;
}

const getSingleIqraParaService = async (id) => {
    const para = await Para.findById({ _id: id })
                                .populate({
                                    path: 'surah',
                                    populate: { path: 'ayat' }
                                });
             
    const totalSurahAdded = para.surah.length; 

    return {
        ...para.toObject(), 
        totalSurahAdded,
    };
}

const deleteSingleIqraParaService = async (id) => {
    const para = await getSingleIqraParaService(id);
    const surahIds = para.surah.map(s => s._id);
    const ayatIds = para.surah.flatMap(s => s.ayat.map(a => a._id));
    
    await Ayat.deleteMany({ _id: { $in: ayatIds } });
    await Surah.deleteMany({ _id: { $in: surahIds } });

    const result = await Para.findByIdAndDelete({ _id: id });
    return result;
};

const updateSingleIqraParaService = async (id, data) => {
    const para = await Para.findOneAndUpdate({ _id: id }, data);
    return para;
};

//surah
const createIqraSurahService = async (id, data) => {
    const surah = await Surah.create(data);
    const para = await Para.findOneAndUpdate(
        { _id: id }, 
        { 
            $push: { "surah": surah._id }, 
            // $inc: { totalSurahAdded: 1 } 
        },
        { new: true }
    );
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
    const ayat = await Ayat.create(data);
    const surah = await Surah.findOneAndUpdate(
        { _id: id }, 
        { 
            $push: { 'ayat': ayat._id }, 
            // $inc: { totalSurahAdded: 1 } 
        },
        { new: true });
    return ayat;
}

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

//reset
const deleteIqraBookService = async () => {
    const para = await Para.deleteMany({});
    const surah = await Surah.deleteMany({});
    const ayat = await Ayat.deleteMany({});
    return true;
}

module.exports = {
    getIqraBookService,
    createIqraParaService,
    getSingleIqraParaService,
    deleteSingleIqraParaService,
    updateSingleIqraParaService,
    createIqraSurahService,
    getSingleIqraSurahService,
    deleteSingleIqraSurahService,
    updateSingleIqraSurahService,
    createIqraAyatService,
    getSingleIqraAyatService,
    deleteSingleIqraAyatService,
    updateSingleIqraAyatService,
    deleteIqraBookService
}