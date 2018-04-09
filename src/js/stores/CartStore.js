import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';
import ActionTypes from '../actions/ActionTypes';

class CartStore extends EventEmitter {

  constructor() {
    super();

    console.log("In cart store")

    this.cart = {
      lines: [],
      loaded: false,
      error: false
    }

    fetch('http://challenge.monoqi.net/cart')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.cart = {
            lines: data.lines,
            loaded: true,
            error: false;
          }

          this.emit("change");
        });
  }

  getCart() {
    return this.cart;
  }

  handleActions(action){
    switch(action.type) {
      case ActionTypes.ADD_ITEM: {
        // fetch('http://challenge.monoqi.net/article/'+action.sku)
        //   .then(res => res.json())
        //   .then(data => {
        //     this.article = data;
        //     this.emit("change");
        //   });
         break;
      }

    }
  }

}

const cartStore = new CartStore();
dispatcher.register(cartStore.handleActions.bind(cartStore));

export default cartStore;
