import { Schema, model } from "mongoose";

export interface Food{
    id:string;
    name:string;
    price:number;
    tags:string[];
    favourite:boolean;
    stars:number;
    imageUrl:string;
    origins:string[];
    cookTime:string;

}

export const FoodSchema=new Schema<Food>({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    tags:{type:[String]},
    favourite:{type:Boolean,default:false},
    imageUrl:{type:String,required:true},
    origins:{type:[String],required:true},
    cookTime:{type:String,required:true},
    stars:{type:Number,required:true}
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


export const FoodModel=model<Food>('food',FoodSchema); //food is the singular of model name in db