import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';

const RegNavBar = () => (

  <nav>
    <Link to='/login'>Login</Link>
    <Link to='/about'>About</Link>
  </nav>
  
);


export default RegNavBar;