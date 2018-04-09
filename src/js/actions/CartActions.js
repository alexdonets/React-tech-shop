import dispatcher from '../dispatcher';

import ActionTypes from './ActionTypes';

export function addItem(sku) {
  dispatcher.dispatch({
    type: ActionTypes.ADD_ITEM,
    sku
  });
}

export function removeItem(id) {
  dispatcher.dispatch({
    type: ActionTypes.REMOVE_ITEM,
    id
  });
}

export function changeQuantity(item) {
  dispatcher.dispatch({
    type: ActionTypes.UPDATE_ITEM,
    item
  });
}

export function incrementQuantity(item) {
  dispatcher.dispatch({
    type: ActionTypes.UPDATE_ITEM,
    item
  });
}
