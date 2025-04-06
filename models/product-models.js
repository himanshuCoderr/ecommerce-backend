const mongoose = require("mongoose")


const productSchema =new mongoose.Schema({
    title : {type : String , required : true , trim : true , maxlength : 100}  , 
    description : {type : String , required : true} , 
    price  : {type : String , required : true , min : [0   , "price must be greater then 0"]} , 
    discount : {type : Number} , 
    category : {type : String} , 
    brand : [{type : String}] , 
    stock : {required : true },
    tags : [{type : String}] , 
    isFeatured : {type : Boolean} ,
    variants  : [{type: String , required : true}] ,
    deliveryInfo : {type : String , default : "Delivered in 5-7 business days"} ,
    warranty : [{type:String}],
    seller : {type : String},
    rating : {type : Number},
    numReviews : {type : Number} , 
    createdAt : {default : Date.now()} ,
    updateAt : {default : Date.now()},
    createdBy : {type : String} , 
    updatedBy : {type :String}
})




// _id
// 67f1570e153b4b243aacb5ad
// title
// "Prevent impact."
// description
// "Teacher black section whole not heart personal instead course go least…"
// price
// 3968
// discount
// 15
// category
// "Electronics"
// brand
// "Jockey"
// stock
// 281
// sku
// "ELEC-JOCK-0001"

// tags
// Array (2)
// isFeatured
// true

// variants
// Array (3)
// deliveryInfo
// "Delivered in 5-7 business days"
// warranty
// "2 year warranty"
// seller
// "GadgetMart"

// images
// Array (1)
// rating
// 4
// numReviews
// 137
// createdAt
// "2024-09-17T16:11:11.995740"