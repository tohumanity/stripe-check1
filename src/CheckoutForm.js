import React, {Component} from 'react';
import Card from "./Card"
import {
  injectStripe,
} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
}
  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "MyName"});
    let res = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
    this.setState({token: JSON.stringify({token}, null, 2)})
    this.setState({response: JSON.stringify(res.status, null, 2)})
    console.log('Response', res);
    if (res.ok) this.setState({complete: true});
  }

  render() {
    if (this.state.complete) return (
      <>
      <h1>Purchase Complete</h1>
      <div>Response Status: <pre>{this.state.response}</pre></div>
      <div>Token: <pre>{this.state.token}</pre></div>
      <p>{}</p>
      </>
    );

    return (
      <div className="checkout">
        <p>Demo <b>Inputs</b></p>
        <p>Card Number: 4242424242424242</p>
        <p>MM/YY: 02\20</p>
        <p>CVC: 2222</p>
        <p>ZIP: 22222</p>
        <Card />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);