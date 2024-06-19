const express = require("express")
const { getProjects, createProject, updateProject, deleteProject, uploadImage } = require("../controllers/projectControllers")
const { upload } = require("../utils/upload")


const router = express.Router()

router.get("/", getProjects)
router.post("/", createProject)
router.post("/upload", upload.single("image"), uploadImage)
router.put("/:id", updateProject)
router.delete("/:id", deleteProject)

module.exports = router