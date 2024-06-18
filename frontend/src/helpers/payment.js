// Function to fetch the Stripe publishable key
export const getStripeKey = async () => {
    const response = await fetch('http://localhost:8080/api/stripe/get-stripe-key', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    if (data.publishableKey) {
        return data.publishableKey;
    } else {
        console.error('Error:', data.error);
    }
};

// Function to create a payment intent
export const createPaymentIntent = async (amount, currency) => {
    const response = await fetch('http://localhost:8080/api/stripe/create-payment-intent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount,
            currency,
            paymentMethodTypes: ['card'], // example payment methods
        }),
    });

    const data = await response.json();
    if (data.clientSecret) {
        return data.clientSecret;
    } else {
        console.error('Error:', data.error);
    }
};
