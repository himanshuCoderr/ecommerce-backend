const express = require("express")
const {getAllProducts , getProductById , createProduct , updateProductById , deleteProductById} = require("../controllers/product-controllers")


const router = express.Router()

router.get("/" , getAllProducts)

router.get("/:id" , getProductById)

router.post("/create" , createProduct)

router.put("/:id" , updateProductById)

router.delete("/:id" , deleteProductById)

module.exports = router