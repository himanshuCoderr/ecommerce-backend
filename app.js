const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const productRoutes = require("./routes/product-routes.js")

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/api/v1/products' , productRoutes)


module.exports = app