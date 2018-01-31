//Base
import React, { Component } from 'react';

//Components
import Home from '../../templates/Home';
import Contact from '../../templates/Contact';
import Work from '../../templates/Work';
import Timeline from '../../templates/Timeline';

class Homepage extends Component {
  render() {
    return (
      <main>
        <Home />
        <Timeline />
        <Work />
        <Contact />
      </main>
    );
  }
}

export default Homepage;
