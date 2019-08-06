import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Index from './pages/Index';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Diff } from './components/Diff';
import Crumbs from './components/Crumbs';
import ArticlePattern from './pages/ArticlePattern';
import { Notfound } from './pages/Notfound';

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="wrapper">
        <Navbar />
        <div className="indexWrap">
          <div className="indexContent">
            <Crumbs />
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/:link" component={ArticlePattern} />
              <Route component={Notfound} />
            </Switch>
          </div>
          <Diff />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Router />, document.querySelector('.root'));
