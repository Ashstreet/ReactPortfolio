//Base
import React, { Component } from 'react';

import './index.css';

class Hero extends Component {
    render() {
      let words;
      
      words = this.props.heroWords.map((words) =>
          <span>{words.word}</span>
      );
      
      return (
        <header className={this.props.heroType}>
          <div className={this.props.containerClass}>
            <h1 className={this.props.heroClass}><i className={this.props.icon}></i>{this.props.heroText}</h1>
            <h2 className={this.props.heroSub}>{this.props.subHeadingText}</h2>
            <div className="rw-words">
            {words}
            </div>
          </div>
        </header>
      );
    }
  }

  export default Hero;