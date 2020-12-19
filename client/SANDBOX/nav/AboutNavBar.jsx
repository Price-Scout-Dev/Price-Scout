import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';

const AboutNavBar = () => (

  <nav>
    <Link to='/login'>Login</Link>
    <Link to='/register'>Register</Link>
  </nav>
  
);



export default AboutNavBar;