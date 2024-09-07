// Dependencies
const express = require("express")

// Dotenv
const dotenv = require("dotenv")
dotenv.config()

// Database and routes require
const connectToDatabase = require("./src/database/database")
const userRoutes = require("./src/router/user.router")
const authRoutes = require("./src/router/auth.router")
const productRoutes = require("./src/router/product.router")
const categoryRoutes = require("./src/router/category.router")


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
app.use("/product", productRoutes)
app.use("/category", categoryRoutes)

// Welcome
app.get("/", (req, res) => {
    res.send({
        message: "Bem-vindo ao nosso marketplace."
    })
})

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`)
})