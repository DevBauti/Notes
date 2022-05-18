import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

let baseUri = process.env.MONGO_URI

mongoose.connect(baseUri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('db')).catch((err) => console.log(err))