import mongoose from 'mongoose'
import Note from '../model/notesModel.js'

export const createNote = async (req, res) => {
    const { title, text } = req.body
    if (!title && !text) {
        res.status(400).json({
            message: 'Bad request'
        })
    }
    try {
        let note = new Note({
            title: title,
            text: text
        })
        let newNote = await note.save()
        res.redirect('./')
        console.log(newNote);
    } catch (error) {
        res.status(500).json({
            message: 'Internal error'
        })
    }
}

export const allNote = async (req, res) => {
    try {
        let notes = await Note.find({}).lean()
        res.render('./includes/major.pug', { notes: notes })
    } catch (error) {
        res.render('./includes/major.pug', {notes: {title: 'Example title', text:'Example text'}})
    }
}

export const oneNote = async (req, res) => {
    const _id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(400).json({
            message: 'Bad request'
        })
    }
    try {
        let note = await Note.findById(_id)
        res.render('./includes/update.pug', { note: note })
    } catch (error) {
        console.log(error.message);
    }
}

export const updateNote = async (req, res, next) => {
    const { title, text } = req.body
    if (!title && !text) {
        res.status(400).json({
            message: 'Bad request'
        })
    }
    const _id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).json({
            message: `${_id} no exist`
        })
    }
    try {
        await Note.findByIdAndUpdate(_id, { title: title, text: text }, { new: true })
        res.redirect('../')
    } catch (error) {
        res.status(500).json({
            message: 'Internal error'
        })
    }
}


export const deleteNote = async (req, res) => {
    const _id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404).json({
            message: `${_id} no exist`
        })
    }
    try {
        await Note.findByIdAndDelete(_id)
        res.redirect('../../')
    } catch (error) {
        res.status(500).json({
            message: 'Internal error'
        })
    }
}
