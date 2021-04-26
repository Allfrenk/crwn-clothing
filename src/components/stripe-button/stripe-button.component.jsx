import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //
  const priceForStripe = price * 100;
  const publisheableKey =
    "pk_test_51IkUGZDWAGWizaB51HKM5SdXEh8UmC61RHdsvxz20why76okt3OdiyaVykoGAzZVAnrU1KMUyKLOLPpw8xyDIHS700HFdguKO1";
  //

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisheableKey}
    />
  );
};

export default StripeCheckoutButton;
