const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    title : {type : String , required : true , trim : true , maxlength : 100}  , 
    description : {type : String , required : true} , 
    price  : {type : String , required : true , min : [0   , "price must be greater then 0"]} , 
    discount : {type : Number} , 
    category : {type : String} , 
    brand : [{type : String}] , 
    stock : {required : true , min : [0 , "stock must be greater then 0"] , type : Number} ,
    tags : [{type : String}] , 
    isFeatured : {type : Boolean} ,
    variants  : [{type: String , required : true}] ,
    deliveryInfo : {type : String , default : "Delivered in 5-7 business days"} ,
    warranty : [{type:String}],
    seller : {type : String},
    rating : {type : Number},
    numReviews : {type : Number} , 
    createdAt : {default : Date.now , type : Date} ,
    updateAt : {default : Date.now , type : Date} ,
    createdBy : {type : String} , 
    updatedBy : {type :String}
})

const Product = mongoose.model("product" , productSchema)

module.exports = Product

