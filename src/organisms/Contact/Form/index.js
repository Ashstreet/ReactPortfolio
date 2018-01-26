//Base
import React, { Component } from 'react';

//Component
import ContactForm from '../../../molecules/ContactForm';

class MapOrganism extends Component {
    render() {
      return (
            <ContactForm 
            linktype="btn"
            submitText="Submit" 
            headinglevel = "2"
            titleStyle = "article-heading"
            title = "Talk To Me"
            icon = "far fa-hand-point-right"
            />
      )
    }
  }

  export default MapOrganism;