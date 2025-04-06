const app = require("./app.js")
require('dotenv').config()
const connectDb = require("./config/db.js")
const PORT = process.env.PORT || 5000


connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running on http://localhost:${PORT}`)
    })
}).catch(
    () => {
        console.log("Internal Server Error")
    }
)