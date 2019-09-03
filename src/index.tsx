import React from 'react';
import {render} from 'react-dom';

import {StripeProvider} from 'react-stripe-elements';

import MyStoreCheckout from './MyStoreCheckout';

const App = () => {
  return (
    <StripeProvider apiKey="pk_test_CmdQI1ZgsiGPXxLqO8gfw6M700FXRWfIlb">
      <MyStoreCheckout />
    </StripeProvider>
  );
};

render(<App />, document.getElementById('root'));