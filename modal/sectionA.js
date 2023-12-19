const mongoose=require('mongoose')


const sectionASchema=new mongoose.Schema({
    name:{type:String},
    attendance:{type:String},
    date:{type:String},
})

const sectionAmodel=mongoose.model("studentNameA",sectionASchema)
module.exports=sectionAmodel