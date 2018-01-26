//Base
import React, { Component } from 'react';

//Component
import Hero from '../../atoms/Hero';

class HomePage extends Component {
    render() {
      return (
        <div className={this.props.position}>
            <Hero 
            className={this.props.heroClass}
            heroText={this.props.heroText}
            subHeadingText={this.props.subHeadingText}
            heroClass={this.props.heroClass}
            heroSub={this.props.heroSub} 
            heroType={this.props.heroType} 
            />
        </div>
      )
    }
  }

  export default HomePage;