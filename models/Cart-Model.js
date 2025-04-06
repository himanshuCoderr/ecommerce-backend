const mongoose = require("mongoose")

const Cart= new mongoose.Schema({
    title : {type : String , required : true , trim : true , maxlength : 100}  , 
    description : {type : String , required : true} , 
    price  : {type : String , required : true , min : [0   , "price must be greater then 0"]} , 
    discount : {type : Number},
    deliveryInfo : {type : String , default : "Delivered in 5-7 business days"},
    seller : {type : String}
});
module.exports=Cart;