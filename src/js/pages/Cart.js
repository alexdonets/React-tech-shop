import React, { Component } from 'react';

import CartStore from '../stores/CartStore';

class Cart extends Component {
  render() {
    console.log("In cart");
    return (
      <div className="Cart">
        <p>Cart</p>
      </div>
    );
  }
}

export default Cart;
