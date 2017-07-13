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
import ItemNew from './components/item_new';
import ItemShow from './components/item_show';
import ItemEdit from './components/item_edit';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
  <BrowserRouter>
    <div>
      <Nav/>
      <Switch>

        <Route path='/items/edit/:id' component={ItemEdit}/>
        <Route path='/items/new' component={ItemNew}/>
        <Route path='/items/:id' component={ItemShow}/>
        <Route path='/' component={ItemHome}/>

      </Switch>
    </div>
  </BrowserRouter>
</Provider>, document.querySelector('.container'));
