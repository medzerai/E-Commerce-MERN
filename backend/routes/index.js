const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/userSignUp");
const userSignInController = require("../controller/userSignIn");
const userDetailsController = require("../controller/userDetails");
const authToken = require("../middleware/authToken");
const userLogout = require("../controller/userLogout");
const allUsers = require("../controller/allUsers");
const updateUser = require("../controller/updateUser");
const uploadProductController = require("../controller/uploadProduct");
const paymentController = require('../controllers/paymentController');

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

router.post("/upload-product", authToken, uploadProductController);
// Route to create a payment intent
router.post('/create-payment-intent', paymentController.createPaymentIntent);	
// Route to get Stripe publishable key
router.get('/get-stripe-key', paymentController.getStripeKey);

module.exports = router;
