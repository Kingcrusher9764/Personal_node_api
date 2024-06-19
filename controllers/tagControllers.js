const Tags = require("../models/tagModel")

const getTags = async (req, res, next) => {
    try {
        // get the tags data from the DB
        const tags = await Tags.find()

        // return the data in json format
        res.status(200).json({ success: true, data: tags })

    } catch (err) {
        const error = new Error()
        error.status = 400
        error.message = "Failed to get Tags data"
        next(error)
    }
}

const createTag = async (req, res, next) => {
    try {
        // Get the data from request body
        const { name, image } = req.body

        // Check the data is given or not
        if (!name || !image) {
            return res.status(403).json({ message: "Please provide all the data" })
        }

        // Create a new tag
        const tag = new Tags({
            name: name,
            ...(image && { image: image }),
        })

        // Save/commit the new project
        await tag.save()

        // give response of success
        res.status(201).json({ success: true, message: "Tag created successfully!" })

    } catch (err) {
        const error = new Error()
        error.status = 400
        error.message = "Failed to create Tag"
        next(error)
    }
}

const uploadImage = async (req, res, next) => {
    try {

        const image = `images/${req.file.filename}`

        res.status(203).json({ success: true, message: "Image uploaded successfully", url: image })

    } catch (err) {
        const error = new Error()
        error.status = 400
        error.message = "Failed to upload Tag image"
        next(error)
    }
}

const updateTag = async (req, res, next) => {
    try {
        // get the data
        const id = req.params.id
        const { name, image } = req.body

        // find and update tag by id
        const tag = await Tags.findByIdAndUpdate({
            _id: id
        }, {
            ...(name && { name: name }),
            ...(image && { image: image }),
        }, {
            new: true,
        })

        res.status(203).json({ success: true, data: tag })

    } catch (err) {
        console.log(err)
        const error = new Error()
        error.status = 400
        error.message = "Failed to update Tag"
        next(error)
    }
}

const deleteTag = async (req, res, next) => {
    try {
        // get id
        const id = req.params.id

        // find and delete project by id
        const tag = await Tags.findByIdAndDelete({ _id: id })

        res.status(203).json({ success: true, message: "Tag deleted successfully", data: tag })

    } catch (err) {
        const error = new Error()
        error.status = 400
        error.message = "Failed to Delete Tag"
        next(error)
    }
}

module.exports = { getTags, createTag, updateTag, deleteTag, uploadImage }