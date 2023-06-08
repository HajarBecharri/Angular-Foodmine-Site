import { Router } from "express";
import { sample_Tags, sample_foods } from "../data";
import asynceHandler from 'express-async-handler'
import { FoodModel } from "../models/food.model";
const router=Router();

router.get("/seed",asynceHandler(async (req,res)=>{
    const foodsCount=await FoodModel.countDocuments();
    if(foodsCount>0){
        res.send("Seed is already done!")
        return;
    }
    await FoodModel.create(sample_foods);
    res.send("Seed is done!");
}))


router.get("/",asynceHandler(async(req,res)=>{
    const foods=await FoodModel.find();
    res.send(foods);
}))

router.get("/search/:searchterm",asynceHandler(async(req,res)=>{
    //we use the RegExp to denit the lower or upper letter..
    const searchRegex=new RegExp(req.params.searchterm,'i');
    const foods= await FoodModel.find({name:{$regex:searchRegex}})
    res.send(foods);
}))
router.get("/tags",asynceHandler(async(req,res)=>{

    const tags= await FoodModel.aggregate([
        {   // the use of unwind=> 2foods 3tags,unwind tags=>6 foods tags 1 and so we can group it and count it easily
            $unwind:'$tags' //the function will be applied to the tags filed
        },
        {
            $group:{
                _id:'$tags',
                count:{$sum:1}
            }
        },
        {
            $project:{
                _id:0,
                name:'$_id',
                count:'$count'
            }
        }
    ]).sort({count: -1});

    const all={
        count:await FoodModel.countDocuments()
    }

    tags.unshift(all); //is the oposite of push :put elemnt at the begining
    res.send(tags);
    
}))

router.get("/tags/:tagname",asynceHandler(async(req,res)=>{
    //we use the RegExp to denit the lower or upper letter..
    
    const foods= await FoodModel.find({tags:req.params.tagname})
    res.send(foods);
}))

router.get("/:foodId",asynceHandler(async(req,res)=>{
    //we use the RegExp to denit the lower or upper letter..

    const food= await FoodModel.findById(req.params.foodId)
    res.send(food);
}))

export default router;