import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/nav_bar';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <BrowserRouter>
  <div>
    <Nav/>
    <Switch>

    </Switch>
  </div>
</BrowserRouter>, document.querySelector('.container'));
