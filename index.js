// Dependencies
const express = require("express")
const connectToDatabase = require("./src/database/database")

// Initializing Express app
const app = express()
const port = 3000

// Usage of JSON
app.use(express.json())

// Connecting to database
connectToDatabase()

// Welcome
app.get("/", (req, res) => {
    res.send({
        message: "Bem-vindo ao nosso marketplace."
    })
})

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`)
})