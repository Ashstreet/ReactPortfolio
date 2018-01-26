//Base
import React, { Component } from 'react';
import './index.css';   

class Image extends Component {
    render() {
      return (
        <picture>
          <source srcSet={this.props.largeImage} media="(min-width: 1200px)" />
          <source srcSet={this.props.tabletImage} media="(min-width: 600px)" />
          <img className={this.props.class} src={this.props.smallImage} alt={this.props.imageAlt} />
        </picture>
      )
    }
  }

  export default Image;