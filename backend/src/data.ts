import { User } from "./models/user.model"

export const sample_foods: any[] =[
 {
    id:'1',
    name:'tortiya',
    price:20 ,
    tags:['lunch','yummy'],
    favourite:true,
    stars:5,
    imageUrl:'assets/food-1.jpg',
    origins:['maroc'],
    cookTime:'10-20',

 },
 {
    id:'2',
    name:'TAGIN',
    price:40 ,
    tags:['dinner','yummy'],
    favourite:false,
    stars:5,
    imageUrl:'assets/food-2.jpg',
    origins:['maroc'],
    cookTime:'40-50',

 }
]
export const sample_Tags: any[]=[
{name:'All',count:6},
{name:'lunch',count:6},
{name:'dinner',count:6}

]


export const sample_users: any[]=[
   {name:'ME',email:"me@gmail.com",password:1234,address:"Hassana",isAdmin:true},
   {name:'MOI',email:"moi@gmail.com",password:12345,address:"Hassana",isAdmin:true}
   
   ]