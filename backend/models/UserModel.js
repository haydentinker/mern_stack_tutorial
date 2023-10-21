import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema =new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Your email is required"],
        unqiue:true
    },
    password:{
        type:String,
        required:[true,"Your password is required"]
    },
    username:{
        type:String,
        required:[true,"Your username is required"],
    },
    createdAt:{
        type:Date,
        default:new Date(),
    },
})

userSchema.pre("save",async function(){
    this.password=await bcrypt.hash(this.password,12);

});
export const User=mongoose.model('User',userSchema);