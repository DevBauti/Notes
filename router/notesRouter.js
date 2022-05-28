import { Router } from "express";
import { createNote, allNote, oneNote, updateNote, deleteNote } from '../controller/notesControl.js'
import { schema, noteValidations } from "../controller/validations.js";

const noteRoutes = Router()

noteRoutes.get('/', allNote)
noteRoutes.post('/', noteValidations(schema), createNote)
noteRoutes.get('/update/:id', oneNote)
noteRoutes.post('/update/:id', noteValidations(schema), updateNote)
noteRoutes.get('/note/:id/delete', deleteNote)

// 

export default noteRoutes