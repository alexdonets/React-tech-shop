import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';
import ActionTypes from '../actions/ActionTypes';

class CatalogStore extends EventEmitter {

  constructor() {
    super();

    this.catalog = {
      articles: [],
      loaded: false,
      error: false
    }

    this.article = {}

    fetch('http://challenge.monoqi.net/catalog')
        .then(res => res.json())
        .then(data => {

          this.catalog = {
            articles: data.articles,
            loaded: true
          }

          this.emit("change");
        });
  }

  getAll() {
    return this.catalog;
  }

  getArticle() {
    return this.article;
  }

  handleActions(action){
    switch(action.type) {
      case ActionTypes.FETCH_ARTICLE: {
        fetch('http://challenge.monoqi.net/article/'+action.sku)
          .then(res => res.json())
          .then(data => {
            this.article = data;
            this.emit("change");
          });
        break;
      }

    }
  }

}

const catStore = new CatalogStore();
dispatcher.register(catStore.handleActions.bind(catStore));

export default catStore;
