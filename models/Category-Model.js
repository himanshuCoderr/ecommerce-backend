const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true, maxlength: 50 }, 
    description: { type: String, trim: true }, 
    createdAt: { type: Date, default: Date.now }
});

module.exports = CategorySchema;
