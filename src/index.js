/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style,linebreak-style

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './components/Main';
import HomePageContainer from './containers/HomePageContainer';
import ResultPageContainer from './containers/ResultPageContainer';
import store from './store';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Route path="/" component={Main} />
          <Route path="/" component={HomePageContainer} />
          <Route path="/result" component={ResultPageContainer} />
        </div>
      </Router>
    </MuiThemeProvider>

  </Provider>,
  document.getElementById('app')
);
