import dispatcher from '../dispatcher';

import ActionTypes from './ActionTypes';

export function getCatalog() {
  dispatcher.dispatch({
    type: ActionTypes.FETCH_CATALOG
  });
}

export function getArticle(sku) {
  dispatcher.dispatch({
    type: ActionTypes.FETCH_ARTICLE,
    sku
  });
}
