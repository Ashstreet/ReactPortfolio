//Base
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Heading extends Component {
    render() {
      const Tag = 'h' + this.props.headinglevel
      return (
        <Tag className={this.props.titleStyle}>
            {this.props.title}
        </Tag>
      );
    }
  }

  export default Heading;

  Heading.PropTypes = {
    headinglevel: PropTypes.oneOf(['1', '2', '3', '4', '5', '6'])
  }