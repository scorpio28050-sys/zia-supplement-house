const mongoose = require('mongoose');

// Define Order schema
const orderSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
    quantity: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], default: 'Pending' }
});

// Create Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;