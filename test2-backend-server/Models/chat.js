const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    chat: String,
    user: {
        id: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        },
        name: String,
    },
},
    { timestamps: true } // 수정: "timestamp" → "timestamps"
);

module.exports = mongoose.model("Chat", chatSchema);
