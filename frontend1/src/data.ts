import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';
import { User } from './app/shared/models/User';
export const sample_foods: Food[] =[
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
export const sample_Tags: Tag[]=[
{name:'All',count:6},
{name:'lunch',count:6},
{name:'dinner',count:6}

]

