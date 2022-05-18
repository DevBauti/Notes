import mongoose from "mongoose";

const {Schema, model} = mongoose

const noteSchema = new Schema({
    title: {type: String, minlength: 2, maxlength: 30},
    text: {type: String, minlength: 2, maxlength: 250, required: true}
})

export default model('Note', noteSchema)