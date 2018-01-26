//Base
import React, { Component } from 'react';
import './index.css';

class CodeBlock extends Component {
    render() {
        return (
            <pre className={this.props.codeClass}>{this.props.content}</pre>
        )
    }
  }

  export default CodeBlock;