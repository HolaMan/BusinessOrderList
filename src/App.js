import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import OrderPage from 'components/OrderPage';
import HistoryPage from 'components/HistoryPage';

import './App.css';
import './fonts.css';

class App extends Component {
  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/">
            <div>
              pxCode Screen List: <br />
              <Link to="/OrderPage">OrderPage</Link>
              <br />
              <Link to="/HistoryPage">HistoryPage</Link>
            </div>
          </Route>

          <Route exact path="/OrderPage" component={OrderPage} />
          <Route exact path="/HistoryPage" component={HistoryPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
