const mongoose = require("mongoose")

const connectToDatabase = () => {
    try{
        mongoose.connect("mongodb://localhost:27017")
        console.log(`The MongoDB server is connected.`)
    }
    catch(err){
        console.log(`Something went wrong to connect to MongoDB. Error: ${err}`)
    }
}

module.exports = connectToDatabase