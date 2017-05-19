import React  from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Main = () => {
  return (
    <div>
      Main force
    </div>
  );
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Message = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)


const Inbox = ({match}) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Message}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const App = () => (
  <Router>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <hr/>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
      </ul>

      <Route exact path="/" component={Main}/>
      <Route path="/about" component={About}/>
      <Route path="/inbox" component={Inbox}/>
    </div>
  </Router>
)

export default App;
