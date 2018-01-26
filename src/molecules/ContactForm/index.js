//Base
import React, { Component } from 'react';
import "./index.css";

//Component
import Link from '../../atoms/Links';
import Heading from '../../atoms/Heading';

class ContactForm extends Component {
    render() {
      return (
        <div>
        <form action="https://formspree.io/ashleystreet03@gmail.com"
        method="POST" className="contact-form">
        <Heading headinglevel={this.props.headinglevel} titleStyle={this.props.titleStyle} title={this.props.title} />
          <input type="text" name="name" placeholder="Your name"/>
          <input type="email" name="email" placeholder="Your email" />
          <input type="hidden" name="_subject" value="New submission!" />
          <textarea maxlength="256" name="message" placeholder="Your message"></textarea>
          <input type="text" name="_gotcha" style={{display:'none'}} />
        <Link icon={this.props.icon} type="submit" linkProp="button" linktype={this.props.linktype} linkName={this.props.submitText} />
        </form>
        </div>
      )
    }
  }

  export default ContactForm;