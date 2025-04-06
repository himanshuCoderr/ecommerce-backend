const mongoose = require("mongoose")

const UserModel = new mongoose.Schema({
    First_name: { type: String, required: true },
    Last_Name: { type: String, required: true },
    Middle_Name: { type: String },
    Email: { type: String, required: true, unique: true },
    Phone: { type: Number, required: true, unique: true },
    Password: { type: String, required: true },
    Address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postalCode: { type: String },
    },
    Date_of_Birth: { type: Date },
    Profile_Picture: { type: String },
    Role: { type: String, enum: ['Admin', 'User', 'Guest'], default: 'User' },
    Status: { type: String, enum: ['Active', 'Inactive', 'Suspended'], default: 'Active' },
    Created_At: { type: Date, default: Date.now },
    Updated_At: { type: Date, default: Date.now },
    Is_Deleted: { type: Boolean, default: false },
    Last_Login: { type: Date },
    Is_Email_Verified: { type: Boolean, default: false },
    Is_Phone_Verified: { type: Boolean, default: false },
    AlreadyCreated: { type: Boolean, default: false },
  });
  
  module.exports=UserModel;