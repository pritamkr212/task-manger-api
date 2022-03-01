const mongoose =require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')

const taskSchema= new mongoose.Schema({
    description:{
        type:String,
        trim:true,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false,
        required:false,
    },
    Owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
})


taskSchema.pre('save',async function (next){
    const task=this
    if(task.isModified('completed')){
        task.completed= await this
    }
    next()
})

const Task=mongoose.model('Task',taskSchema)
module.exports=Task
