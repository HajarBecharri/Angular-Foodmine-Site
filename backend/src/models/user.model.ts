import { Schema,model } from "mongoose";

export interface User{
    id:string;
    email:string;
    password:string;
    name:string;
    address:string;
    isAdmin:boolean;
}

export const UserSchema=new Schema<User>({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    isAdmin:{type:Boolean,required:true}
},{
toJSON:{
    // we put virtuals to true to have _id=id in interface when you put data in db
    virtuals:true
},
toObject:{
    // we put virtuals to true to have _id=id in interface when you get data from db
    virtuals:true
},
timestamps:true
})


export const UserModel=model<User>('user',UserSchema); //user is the singular of model name in db