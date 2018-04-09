import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom';

import Layout from './js/pages/Layout';

import './css/main.css';

const root = document.getElementById('root');

ReactDOM.render(
  <HashRouter>
    <Layout />
  </HashRouter>
  , root);
