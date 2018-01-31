//Base
import React, { Component } from 'react';

//Component
import Hero from '../../atoms/Hero';

class HomePage extends Component {
    render() {

      return (
            <Hero 
            className={this.props.heroClass}
            heroText={this.props.heroText}
            subHeadingText={this.props.subHeadingText}
            heroClass={this.props.heroClass}
            heroSub={this.props.heroSub} 
            heroType={this.props.heroType} 
            heroWords={this.props.heroWords}
            containerClass={this.props.containerClass}
            />
      )
    }
  }

  export default HomePage;