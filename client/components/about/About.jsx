import React from 'react';
import AboutNavBar from '../nav/AboutNavBar';
import { AppBar } from '@material-ui/core';

const About = () => (
  <>
    <AppBar>
      <AboutNavBar />
    </AppBar>
    <h1>Hi, i am the about page</h1>
  </>
);

export default About;