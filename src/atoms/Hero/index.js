//Base
import React, { Component } from 'react';

import './index.css';

class Hero extends Component {
    render() {
      return (
        <header className={this.props.heroType}>
          <h1 className={this.props.heroClass}><i className={this.props.icon}></i>{this.props.heroText}</h1>
          <h2 className={this.props.heroSub}>{this.props.subHeadingText}</h2>
        </header>
      );
    }
  }

  export default Hero;