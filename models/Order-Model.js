const mongoose = require("mongoose")

const Orders= new mongoose.Schema({
    title : {type : String , required : true , trim : true , maxlength : 100}  , 
    description : {type : String , required : true} , 
    price  : {type : String , required : true , min : [0   , "price must be greater then 0"]} , 
    discount : {type : Number},
    deliveryInfo : {type : String , default : "Delivered in 5-7 business days"},
    seller : {type : String},
    Email: { type: String, required: true, unique: true },
    Phone: { type: Number, required: true, unique: true },
    Address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        postalCode: { type: String },
      }
});
module.exports=Orders;