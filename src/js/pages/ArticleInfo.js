import React, { Component } from 'react';

import CatalogStore from '../stores/CatalogStore';
import * as CatalogActions from '../actions/CatalogActions';
import * as CartActions from '../actions/CartActions';

class ArticleInfo extends Component {

  constructor(props) {
    super(props);

    this.getArticle = this.getArticle.bind(this);
    this.state = {
      article: {}
    }
  }

  componentWillMount() {
    CatalogStore.on("change", this.getArticle);
    CatalogActions.getArticle(this.props.match.params.sku);
  }

  componentWillUnmount() {
    CatalogStore.removeListener("change", this.getArticle);
  }

  getArticle() {
    this.setState({
      article: CatalogStore.getArticle()
    });
  }

  addToCart(e) {
    CartActions.addItem(this.state.article.sku);
  }

  render() {

    if(this.state.article.name) {
      return (
        <div className="ArticleInfo">

          <img src={this.state.article.image} />
          <h2>{this.state.article.name}</h2>
          <span>{`${this.state.article.price.amount} ${this.state.article.price.currency}`}</span>
          <button onClick={this.addToCart.bind(this)}>Add to Cart</button>

        </div>
      );
    } else {
      return null;
    }

  }
}

export default ArticleInfo;
