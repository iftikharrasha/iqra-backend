const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const ParaSchema = new mongoose.Schema({
    no: { type: Number, required: true },
    landed: { type: String, required: true },
    ruku: { type: Number, required: true },
    naming: { type: String, default: "" },
    fazilat: { type: String, default: "" },
    shanenuzul: { type: String, default: "" },
    quote: { type: String, default: "" },
    tika: { type: [String], default: [] },
    totalSurah: { type: Number, required: true },
    surah: [{
      type: ObjectId,
      ref: 'Surah',
    }],
});

const Para = mongoose.model("Para", ParaSchema);
module.exports = Para;