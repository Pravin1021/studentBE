const mongoose=require('mongoose')


const sectionBSchema=new mongoose.Schema({
    name:{type:String},
    attendance:{type:String},
    date:{type:String},
})

const sectionBmodel=mongoose.model("studentNameB",sectionBSchema)
module.exports=sectionBmodel