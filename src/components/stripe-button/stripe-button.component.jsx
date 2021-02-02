import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_S3SL5UCbLCkuGMo29jO9AOe4';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd"
        billingAddress
        shippingAddress
        image=""
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay now"
        token={onToken}
        stripeKey={publishableKey}
      />
    );
};

export default StripeCheckoutButton;