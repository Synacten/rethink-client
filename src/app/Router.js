import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Index from './pages/Index';
import Navbar from './components/layout/Navbar';
import { Notfound } from './pages/Notfound';

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="wrapper">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Router />, document.querySelector('.root'));
