import { sample_users } from "../data";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { User, UserModel, UserSchema } from "../models/user.model";
import asynceHandler from 'express-async-handler'
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import bcrypt from 'bcryptjs';
const router=Router();



router.get("/seed",asynceHandler(async (req,res)=>{
    const usersCount=await UserModel.countDocuments();
    if(usersCount>0){
        res.send("Seed is already done!")
        return;
    }
    await UserModel.create(sample_users);
    res.send("Seed is done!");
}))

router.post("/login",asynceHandler(async(req,res)=>{
    const body=req.body;
    //other smart way :destructuring Assignment
    
    const {email,password}=req.body;

    const user =await UserModel.findOne({email})
    console.log(user?.password)
    const check =bcrypt.compareSync(password,user!.password)
    
    if(check){
        res.send(generateTokenResponse(user))
    }
    else{
        res.status(HTTP_BAD_REQUEST).send("user name or password is invalid")
    }
}))

router.post('/register',asynceHandler(async(req,res)=>{
       const {name,email,password,address}=req.body;
       const user = await UserModel.findOne({email});

       if(user){

        res.status(HTTP_BAD_REQUEST).send("USER IS ALREADY EXIST,PLEASE LOGIN");
        return;
       }

       const encryptedPassword=await bcrypt.hash(password,10);
       const newUser:User={
        id:'',
        name,
        email:email.toLowerCase(),
        password:encryptedPassword,
        address,
        isAdmin:false


       }

       const dbUser= await UserModel.create(newUser);

       res.send(generateTokenResponse(dbUser))

}))


const generateTokenResponse= (user:any)=>{
    const token=jwt.sign({
     email:user.email,isAdmin:user.isAdmin
    },"sommeRandomText",{expiresIn:"30d"});
    user.token=token;
    return user;
 }
 

 export default router;