import React from 'react';
import {CardNumberElement, CardCvcElement, CardExpiryElement} from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (
      <label>
        Card details
        {/* <CardElement style={{base: {fontSize: '18px'}}} /> */}
        <CardNumberElement style={{base: {fontSize: '18px'}}} />
        <CardExpiryElement style={{base: {fontSize: '18px'}}} />
        <CardCvcElement style={{base: {fontSize: '18px'}}} />
      </label>
    );
  }
}

export default CardSection;