const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            addedDate: { type: Date, default: Date.now }
        }
    ]
});

module.exports = WishlistSchema;
