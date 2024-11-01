const mongoose = require("mongoose");

const AyatSchema = new mongoose.Schema({
    no: { type: Number, required: true },
    para: { type: Number, required: true },
    ar: { type: String, required: true },
    bn: { type: String, required: true },
    tafsir: { type: [String], default: [] },
    tika: { type: [String], default: [] },
    mood: { type: String, default: "" },
    featured: { type: Boolean, default: false},
    audio: { type: String, default: "" },
});

const Ayat = mongoose.model("Ayat", AyatSchema);
module.exports = Ayat;