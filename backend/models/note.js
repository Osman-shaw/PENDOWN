import { Schema as _Schema } from "mongoose";
const Schema = _Schema;


const noteSchema = new Schema(
 {
    title: {
        type: String,
        required: true,
      },
      details: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
);

const note = mongoose.model("StickyNote", noteSchema);
module.exports = note;