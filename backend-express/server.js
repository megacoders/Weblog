import express from "express";
import dotenv from "dotenv";
import cors from "cors"


// import db config file 

const app = express()

// cors
app.use(cors())


// for working with json (rest api)
app.use(express.json())



// geting port from .env file 
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is runnig on port ${PORT}`);)