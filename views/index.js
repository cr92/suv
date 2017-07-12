import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

import Nav from './components/nav_bar';
import Reducers from './reducers';
import ItemHome from './components/item_home';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
  <BrowserRouter>
    <div>
      <Nav/>
      <Switch>

        <Route path='/' component={ItemHome}/>

      </Switch>
    </div>
  </BrowserRouter>
</Provider>, document.querySelector('.container'));
