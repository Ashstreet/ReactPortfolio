//Base
import React, { Component } from 'react';

//Component
import Map from '../../organisms/Contact/Map';
import Contact from '../../organisms/Contact/Form';

class ContactPage extends Component {
    render() {
      return (
        <section>
            <div style={{position: 'relative'}}>
                <Map />
                <Contact />
            </div>
        </section>
      )
    }
  }

  export default ContactPage;