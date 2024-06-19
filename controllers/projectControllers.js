const Project = require("../models/projectModel")

const getProjects = async (req, res, next) => {
    try {
        // get the project data from the DB
        const projects = await Project.find().sort({ created_at: -1 })

        // return the data in json format
        res.status(200).json({ success: true, data: projects })

    } catch (err) {
        const error = new Error()
        error.status = 400
        error.message = "Failed to get Projects data"
        next(error)
    }
}

const createProject = async (req, res, next) => {
    try {
        // Get the data from request body
        const { title, description, tags, image } = req.body

        // Check the data is given or not
        if (!title || !description || !tags) {
            return res.status(403).json({ message: "Please provide all the data" })
        }

        // Create a new project
        const project = new Project({
            title: title,
            description: description,
            tags: tags,
            ...(image && { image: image }),
        })

        // Save/commit the new project
        await project.save()

        // give response of success
        res.status(201).json({ success: true, message: "Project created successfully!" })

    } catch (err) {
        const error = new Error()
        error.status = 400
        error.message = "Failed to create Project"
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
        error.message = "Failed to upload Project image"
        next(error)
    }
}

const updateProject = async (req, res, next) => {
    try {
        // get the data
        const id = req.params.id
        const { title, description, tags, image } = req.body

        // find and update project by id
        const project = await Project.findByIdAndUpdate({
            _id: id
        }, {
            ...(title && { title: title }),
            ...(description && { description: description }),
            ...(tags && { tags: tags }),
            ...(image && { image: image }),
        }, {
            new: true,
        })

        res.status(203).json({ success: true, data: project })

    } catch (err) {
        console.log(err)
        const error = new Error()
        error.status = 400
        error.message = "Failed to update Project"
        next(error)
    }
}

const deleteProject = async (req, res, next) => {
    try {
        // get id
        const id = req.params.id

        // find and delete project by id
        const project = await Project.findByIdAndDelete({ _id: id })

        res.status(203).json({ success: true, message: "Project deleted successfully", data: project })

    } catch (err) {
        const error = new Error()
        error.status = 400
        error.message = "Failed to Delete Project"
        next(error)
    }
}

module.exports = { getProjects, createProject, updateProject, deleteProject, uploadImage }