// Dependencies
const express = require("express")
const connectToDatabase = require("./src/database/database")
const userRoutes = require("./src/router/user.router")
const authRoutes = require("./src/router/auth.router")

// Initializing Express app
const app = express()
const port = 3000

// Usage of JSON
app.use(express.json())

// Connecting to database
connectToDatabase()

// Calling routes
app.use("/user", userRoutes)
app.use("/auth", authRoutes)

// Welcome
app.get("/", (req, res) => {
    res.send({
        message: "Bem-vindo ao nosso marketplace."
    })
})

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`)
})