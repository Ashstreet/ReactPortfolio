//Base
import React, { Component } from 'react';

//Component
import Header from '../../../molecules/Header';

class ContactHeader extends Component {
    render() {
      return (
        <div>
            <Header heroClass='page-title' heroText='Contact' position='center' />
        </div>
      )
    }
  }

  export default ContactHeader;