import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../css/Article.css';

class Article extends Component {

  render() {
    return (
      <div className={styles.Article}>
        <img src={this.props.image} />

          <Link to={`article/${this.props.sku}`}><h3>{this.props.name}</h3></Link>
          <span className={styles.price}>{`${this.props.price.amount} ${this.props.price.currency}`}</span>

      </div>
    );
  }
}

export default Article;
