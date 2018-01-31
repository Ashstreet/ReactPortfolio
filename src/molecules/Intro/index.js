//Base
import React, { Component } from 'react';
import './index.css';
import { Col } from 'react-flexbox-grid';

//Component
import Image from '../../atoms/Image';
import Paragraph from '../../atoms/Paragraph';

class IntroSection extends Component {
    render() {
      const hasImages = this.props.hasImages;
      let images;

      hasImages ? images = this.props.images.map((img) =>
        <Image key={img.id} class={img.class} smallImage={img.smallUrl} largeImage={img.largeUrl} alt={this.props.imageAlt} />
      ) : images = null;

      return (
        <div className={this.props.Constyle}> 
            <Col>
              {images}
            </Col>
            <Col>
            <Paragraph content={this.props.paragraph1} paraClass={this.props.paraClass} />
            </Col>
        </div>
      )
    }
  }

  export default IntroSection;