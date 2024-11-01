const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const surahSchema = new mongoose.Schema({
    no: { type: Number, required: true },
    para: { type: Number, required: true },
    name_en: { type: String, required: true },
    name_bn: { type: String, required: true },
    name_ar: { type: String, required: true },
    place: { type: String, required: true },
    ruku: { type: Number, required: true },
    naming: { type: String, default: "" },
    fazilat: { type: String, default: "" },
    shanenuzul: { type: String, default: "" },
    quote: { type: String, default: "" },
    tika: { type: [String], default: [] },
    totalAyat: { type: Number, required: true },
    featured: { type: Boolean, default: false},
    ayat: [{
      type: ObjectId,
      ref: 'Ayat',
    }],
});

const Surah = mongoose.model("Surah", surahSchema);
module.exports = Surah;