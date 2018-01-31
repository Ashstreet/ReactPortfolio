//Base
import React, { Component } from 'react';

//Component
import Image from '../../atoms/Image';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import Link from '../../atoms/Links';
import Slider from 'react-slick';
import './index.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

class BrandCard extends Component {
    render() {
      let content,
      settings;

      settings = {
        infinite: true,
        dots: true
      };

      content = this.props.content.map((content)=>
        <Col xs sm md lg={4}>
          <div key={content.id} className="component">
            <Image class={content.imageClass} tabletImage={content.tabletImage} largeImage={content.largeImage} className={content.imageClass} smallImage={content.smallImage} imageAlt={content.altText} />
            <div className="content-container">
                <Link icon={content.icon} linkProp={content.el} linktype={content.style} linkurl={content.url} linkName={content.title} />
            </div>
          </div>
        </Col>
    );

      return (
        <Row>
        <Col xs={12}>
          <Row between="xs">
            {content}
          </Row>
        </Col>
        </Row>
      )
    }
  }

  export default BrandCard;