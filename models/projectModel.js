const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    tags: {
        type: [String],
    },
    image: {
        type: String,
    }
}, {
    timestamps: true,
})

const Project = mongoose.model("projects", projectSchema)

module.exports = Project