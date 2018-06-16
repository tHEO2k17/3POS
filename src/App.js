import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './shared/Layout.jsx';

import Dashboard from './pages/Dashboard.jsx';
import Sales from './pages/Sales.jsx';
import Inventory from './pages/Inventory.jsx';
import Setup from './pages/Setup.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Route exact path="/" component={Dashboard} />
            <Route path="/sales" component={Sales} />
            <Route path="/Inventory" component={Inventory} />
            <Route path="/setup" component={Setup} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
