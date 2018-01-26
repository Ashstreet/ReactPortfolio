//Base
import React, { Component } from 'react';

import Contactables from '../../../molecules/ContactForm/Contactables';

class ContactBlock extends Component {
    render() {
      let contentArray = [
        {
          id: 0,
          headinglevel: '3',
          headingStyle: 'noth',
          headingText: 'Email',
          Paraclass: 'Paraaa',
          paragraph: 'Ashleystreet03@gmail.com'
        },
        {
          id: 1,
          headinglevel: '3',
          headingStyle: 'noth',
          headingText: 'Tel',
          Paraclass: 'fa fa-',
          paragraph: '07801291659'
        }
      ]
      return (
        <Contactables contentArray={contentArray}/>
      )
    }
  }

  export default ContactBlock;