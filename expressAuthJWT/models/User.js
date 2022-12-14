import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{type:String, required:true,trim:true },
    email:{type:String, required:true},
    password:{type:String, required:true },
    tc:{type:Boolean, required:true}
})

mongoose.set('strictQuery',true)
const UserModel = mongoose.model("user",userSchema)
export default UserModel