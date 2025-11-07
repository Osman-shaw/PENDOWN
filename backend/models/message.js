import { Schema as _Schema } from "mongoose";
const Schema = _Schema;


const messageSchema = new Schema(
{
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
);
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;