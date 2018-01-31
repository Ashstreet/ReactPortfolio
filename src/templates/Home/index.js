//Base
import React, { Component } from 'react';

//Component
import IntroSection from '../../organisms/Homepage/IntroSection';
import Header from '../../organisms/Homepage/Header';

class HomePage extends Component {
    render() {
      return (
        <section>
            <Header />
            <IntroSection />
        </section>
        );
    }
}

export default HomePage;


