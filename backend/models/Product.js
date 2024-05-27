const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: String,
    brandName: String,
    category: String,
    productImage: String,
    description: String,
    price: Number,
    sellingPrice: Number,
    timestamps: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);
