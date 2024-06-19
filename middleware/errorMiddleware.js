const errorMiddleware = (error, req, res) => {
    const status = error.status || 500
    const message = error.message || "Something went wrong!"
    return res.status(status).json({ message: message })
}

module.exports = errorMiddleware