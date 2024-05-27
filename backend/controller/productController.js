const Product = require('../models/Product');

// Upload product
exports.uploadProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update product
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.body.id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get category products
exports.getCategoryProducts = async (req, res) => {
    try {
        const category = req.query.category;
        const products = await Product.find({ category });
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get category wise products
exports.getCategoryWiseProducts = async (req, res) => {
    try {
        const categories = req.body.categories;
        const products = await Product.find({ category: { $in: categories } });
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get product details
exports.getProductDetails = async (req, res) => {
    try {
        const product = await Product.findById(req.body.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
