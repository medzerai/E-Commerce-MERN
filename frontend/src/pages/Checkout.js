import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { createPaymentIntent } from '../helpers/payment';

// Initialize Stripe.js with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');

    const handlePayment = async (event) => {
        event.preventDefault();
        const amount = 5000; // example amount in cents
        const currency = 'tnd'; // example currency (Stripe test mode does not support TND)

        const secret = await createPaymentIntent(amount, currency);
        if (secret) {
            setClientSecret(secret);
            const cardElement = elements.getElement(CardElement);
            const { error, paymentIntent } = await stripe.confirmCardPayment(secret, {
                payment_method: {
                    card: cardElement,
                },
            });

            if (error) {
                console.error('Payment failed:', error);
            } else if (paymentIntent && paymentIntent.status === 'succeeded') {
                console.log('Payment succeeded:', paymentIntent);
            }
        }
    };

    return (
        <form onSubmit={handlePayment}>
            <CardElement />
            <button type="submit" disabled={!stripe || !elements}>
                Pay Now
            </button>
        </form>
    );
};

const Checkout = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default Checkout;
