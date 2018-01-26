//Base
import React, { Component } from 'react';

class LabelField extends Component {
    render() {
        return (
            <label>{this.props.label}</label>
        )
    }
  }

  export default LabelField;