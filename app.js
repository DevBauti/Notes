import express from "express";
import dotenv from "dotenv"
dotenv.config()

import './dataBase.js'
import noteRoutes from "./router/notesRouter.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('views engine', 'pug')
app.set('views', './views')

app.use('/', noteRoutes)

let port = process.env.PORT || 4001

app.listen(port, () => console.log('on'))