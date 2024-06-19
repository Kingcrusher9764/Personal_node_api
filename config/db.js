const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        mongoose.connect(process.env.DATABASE)
            .then(() => console.log("Connected to DB"))
            .catch((err) => console.log(`DB connection Error: ${err}`))
    } catch (err) {
        console.log(`Error in db: ${err}`)
    }
}

module.exports = connectDB