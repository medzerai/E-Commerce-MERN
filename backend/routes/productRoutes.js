const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// Define routes
router.post('/upload-product', productController.uploadProduct);
router.get('/get-product', productController.getAllProducts);
router.post('/update-product', productController.updateProduct);
router.get('/get-categoryProduct', productController.getCategoryProducts);
router.post('/category-product', productController.getCategoryWiseProducts);
router.post('/product-details', productController.getProductDetails);

module.exports = router;
