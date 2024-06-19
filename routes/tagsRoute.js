const express = require("express")
const { getTags, createTag, updateTag, deleteTag, uploadImage } = require("../controllers/tagControllers")
const { upload } = require("../utils/upload")

const router = express.Router()

router.get("/", getTags)
router.post("/", createTag)
router.post("/upload", upload.single("image"), uploadImage)
router.put("/:id", updateTag)
router.delete("/:id", deleteTag)

module.exports = router