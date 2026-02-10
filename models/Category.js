const mongoose = require('mongoose');

// Define the Category schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware to update the updatedAt field
categorySchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Create the Category model
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;