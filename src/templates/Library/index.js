//Base
import React, { Component } from 'react';

//Component
import Components from '../../organisms/Library';
import Navigation from '../../organisms/Nav/Standard';
import Header from '../../organisms/Library/Header';

class Library extends Component {
    render() {
      return (
        <main>
          <div>
            <Navigation />
            <Header />
            <Components />
          </div>
        </main>
      )
    }
  }

  export default Library;