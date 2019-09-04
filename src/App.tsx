import React from 'react';
import {StripeProvider, Elements} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const App = () => {
  return (
    <StripeProvider apiKey="pk_test_CmdQI1ZgsiGPXxLqO8gfw6M700FXRWfIlb">
      <Elements>
        <CheckoutForm/>
      </Elements>
    </StripeProvider>
  );
};

export default App;