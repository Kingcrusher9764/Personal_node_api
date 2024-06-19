const mongoose = require("mongoose")

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    image: {
        type: String,
    }
}, {
    timestamps: true,
})

const Tags = mongoose.model("tags", tagSchema)

module.exports = Tags