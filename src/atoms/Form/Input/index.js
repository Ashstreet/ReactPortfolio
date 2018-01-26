//Base
import React, { Component } from 'react';

class InputField extends Component {
    render() {
        return (
            <input type={this.props.inputType} name={this.props.inputName} value={this.props.inputValue} />
        )
    }
  }

  export default InputField;