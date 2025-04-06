const Product = require("../models/product-models")
// get all products

const getAllProducts = async (req , res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// get product by id

const getProductById = async (req , res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// create new product

const createProduct = async (req , res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// update product by id

const updateProductById = async (req , res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id , req.body , {new : true})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// delete product by id

const deleteProductById = async (req , res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({message : "Product deleted successfully"})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

module.exports = {getAllProducts , getProductById , createProduct , updateProductById , deleteProductById}
