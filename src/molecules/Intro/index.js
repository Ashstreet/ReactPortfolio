//Base
import React, { Component } from 'react';
import './index.css';
import { Grid, Col } from 'react-flexbox-grid';

//Component
import Image from '../../atoms/Image';
import Paragraph from '../../atoms/Paragraph';
import Link from '../../atoms/Links';

class IntroSection extends Component {
    render() {
      const hasLinks = this.props.hasLinks;
      const hasImages = this.props.hasImages;
      let linkArray;
      let images;

      hasLinks ? linkArray = this.props.links.map((link)=>
        <Link icon={link.icon} key={link.id} linkProp={link.el} linktype={link.style} linkurl={link.url} linkName={link.title} />
      ) : linkArray = null;

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
            {hasLinks ? 
              <Col>
                <div className={this.props.navLinkStyle}>
                  {linkArray}
                </div>
              </Col> 
             : null
             }
        </div>
      )
    }
  }

  export default IntroSection;