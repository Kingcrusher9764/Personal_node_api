const axios = require("axios")

const upload = async (file) => {
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", process.env.RESOURCE_TYPE)

    try {
        const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/${process.env.RESOURCE_TYPE}/upload`, data)
        const { url } = res.data
        return url
    } catch (err) {
        console.log(err)
    }

}

module.exports = upload