import React from 'react';
//import PropTypes from 'proptypes';
import AppBar from 'material-ui/AppBar';

const Main = props => (
  <div>
    <AppBar
      title="Github to Find users"
      showMenuIconButton={true}
    />
    <div>
      {props.children}
    </div>
  </div>
);

/*Main.propTypes = {
  children: PropTypes.Object.isRequired,
};*/

export default Main;
