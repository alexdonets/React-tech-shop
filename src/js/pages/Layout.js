import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Nav from '../components/layout/Nav';

import ArticleInfo from './ArticleInfo';
import Cart from './Cart';
import Catalog from './Catalog';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Nav />
        <Switch>
          <Route exact path='/' component={Catalog}/>
          <Route exact path='/article/:sku' component={ArticleInfo}/>
          <Route path='/cart' component={Cart}/>
        </Switch>
      </div>
    );
  }
}

export default Layout;
