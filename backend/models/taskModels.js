import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ['completed', 'pending'],
        required : true
    },
    priority : {
        type : String,
        enum : ['low','medium','high'],
        required : true 

    }
},{timestamps:true})


export const Task = mongoose.model('Task',taskSchema)