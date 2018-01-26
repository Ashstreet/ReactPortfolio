//Base
import React, { Component } from 'react';

//Component
import Navigation from '../../organisms/Nav/Standard';
import Map from '../../organisms/Contact/Map';
import Contact from '../../organisms/Contact/Form';
import Header from '../../organisms/Contact/Header';
import Contactables from '../../organisms/Contact/Block';

class ContactPage extends Component {
//     <div>
//     <Contactables />
// </div>
    render() {
      return (
        <main>
            <div>
                <div>
                    <Navigation />
                </div>
                <div>
                    <Header />
                </div>
                <div style={{position: 'relative'}}>
                    <Map />
                    <Contact />
                </div>
            </div>
        </main>
      )
    }
  }

  export default ContactPage;