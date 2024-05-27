const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    timestamps: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Cart', cartSchema);
