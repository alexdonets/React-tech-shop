import React, { Component } from 'react';

import NavCart from '../NavCart';
import styles from '../../../css/Nav.css';

class Nav extends Component {
  render() {

    return (
      <header className={styles.Nav}>
        <h2>MONOQI - shopping made simple</h2>
        <NavCart />
      </header>
    );
  }
}

export default Nav;
