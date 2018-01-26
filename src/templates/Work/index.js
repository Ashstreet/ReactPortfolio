//Base
import React, { Component } from 'react';

//Component
import Work from '../../organisms/WorkSamples/Work';
import Navigation from '../../organisms/Nav/Standard';
import Header from '../../organisms/WorkSamples/Header';

class Works extends Component {
    render() {
      return (
        <main>
          <div>
          <Navigation />
          </div>
          <div>
          <Header />
          </div>
          <div>
            <Work />
          </div>
        </main>
      )
    }
  }

  export default Works;