//Base
import React, { Component } from 'react';

//Component
import GlobalHeader from '../../organisms/GlobalHeader';
import IntroSection from '../../organisms/Homepage/IntroSection';
import Header from '../../molecules/Header';

class HomePage extends Component {
    render() {
      return (
        <main>
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <IntroSection />
                </div>
                <footer>
                    <GlobalHeader />
                </footer>
            </div>
        </main>
      )
    }
  }

  export default HomePage;