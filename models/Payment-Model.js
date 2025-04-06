const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    paymentMethod: { type: String, required: true, enum: ['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery'] },
    paymentStatus: { type: String, required: true, enum: ['Pending', 'Completed', 'Failed', 'Cancelled'], default: 'Pending' },
    amount: { type: Number, required: true, min: [0, 'Amount must be greater than 0'] },
    paymentDate: { type: Date, default: Date.now }
});

module.exports = PaymentSchema;
