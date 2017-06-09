import React from 'react'

import AppBar from 'material-ui/AppBar';

const Main = props => (
  <div>
    <AppBar title="find data from github" showMenuIconButton={false}/>
    <div>{props.children}</div>
  </div>
)

export default Main;