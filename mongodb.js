const mongoose=require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/students")

.then(()=>{
    console.log("mongo db connected");
})
.catch(()=>{
    console.log("error")
})
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const collection=new mongoose.model('users',userSchema);
module.exports=collection
