const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.createPaymentIntent = async (req, res) => {
    try {
        const { amount, currency } = req.body;

        // Validate amount and currency
        if (!amount || !currency) {
            return res.status(400).json({ error: 'Amount and currency are required' });
        }

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types: ['card'], // Allow only card payments
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getStripeKey = (req, res) => {
    res.status(200).json({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
};
