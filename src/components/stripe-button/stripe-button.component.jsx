import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HA4EbLhhTRDszxbUb5HafQpSvoMbHlqTv57AmfvGzhYoMKqKVBCedIYnPjHzsnah6k00hc6j9Z4pTy7qNt2A2SJ00KFZpZrNL';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='X Clothing Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is ${price}$`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;