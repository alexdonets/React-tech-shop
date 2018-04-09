import React, { Component } from 'react';

import CatalogStore from '../stores/CatalogStore';

import Article from '../components/Article';

class Catalog extends Component {
  constructor() {
    super();
    this.getCatalog = this.getCatalog.bind(this);
    this.state = {
      catalog: {}
    };
  }

  componentWillMount() {
    CatalogStore.on("change", this.getCatalog);
  }

  componentWillUnmount() {
    CatalogStore.removeListener("change", this.getCatalog);
  }

  getCatalog() {

    this.setState({
      catalog: CatalogStore.getAll()
    });
  }

  render() {
    let ArticlesList = [];
    if(this.state.catalog.loaded) {
      const { articles } = this.state.catalog;
      ArticlesList = articles.map((article) => {
        return <Article key={article.sku} {...article} />;
      });
    }

    return (
      <div className="Catalog">
        <p>Catalog</p>
        {ArticlesList}
      </div>
    );
  }
}

export default Catalog;
