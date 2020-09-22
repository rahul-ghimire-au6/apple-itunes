import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import {Provider } from 'react-redux'
import {Route, BrowserRouter,Switch,Redirect} from 'react-router-dom'
import Searchresult from './search_result'
ReactDOM.render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/result' component={Searchresult} />
      <Redirect to='/' />
    </Switch>
    </BrowserRouter>
  {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
