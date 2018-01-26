//Base
import React, { Component } from 'react';
import './index.css';   

class Paragraph extends Component {
    render() {
      return (
          <p className={this.props.paraClass}>{this.props.content}</p>
      )
    }
  }

  export default Paragraph;