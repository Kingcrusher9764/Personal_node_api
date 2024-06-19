const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const path = require("path")
const cors = require("cors")

// custom imports
const errorMiddleware = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")

// load routes
const projectRoute = require("./routes/projectRoute")
const tagRoute = require("./routes/tagsRoute")

// load/access the environment variables
dotenv.config()

// connect to DB
connectDB()

// setup for server
const app = express()
const PORT = process.env.PORT || 5000
app.use(cors({ origin: "*", credentials: true }))
app.use(express.static(path.join(__dirname, "images")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")

// to get the image using url
app.use("/images", express.static("images"))

// checking status route
app.get("/", (req, res) => {
    return res.json({ status: "OK" })
})

// routes setup
app.use("/projects", projectRoute)
app.use("/tags", tagRoute)

// for rest of the routes
app.use("*", (req, res, next) => {
    const error = new Error()
    error.status = 404
    error.message = "No such route is present"
    next(error)
})
// error Middleware to give custom error messages
app.use(errorMiddleware)

// Server started at given PORT
app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`)
})