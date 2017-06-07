import React  from 'react';


import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Home = ()=>(
  <div>
    <h2>Home</h2>
  </div>
)
const About = ()=>(
  <div>
    <h2>About</h2>
  </div>
)

const CustomLink = ({to,label,isExact})=>(
  <Route path={to} exact={isExact} children={  ({match}) => (
    <div className={match? 'active': ''}>
      {match? '>':''} <Link to={to}>{label}</Link>
    </div>
    )
  } />
)

const App = () => (
  <Router>
    <div>
      <CustomLink to="/" isExact={true} label="Home"/>
      <CustomLink to="/about" label="About"/>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/ABOUT" component={About}/>
    </div>

  </Router>
);

export default App;
