//Base
import React, { Component } from 'react';

//Component
import Image from '../../atoms/Image';
import Heading from '../../atoms/Heading';
import Paragraph from '../../atoms/Paragraph';
import Link from '../../atoms/Links';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './index.css';

class BrandCard extends Component {
    render() {
      let content;

      content = this.props.content.map((content)=>

        <Col xs>
          <div key={content.id} className="component">
            <Image class={content.imageClass} tabletImage={content.tabletImage} largeImage={content.largeImage} className={content.imageClass} smallImage={content.smallImage} imageAlt={content.altText} />
            <div className="content-container">
                <Heading titleStyle={content.headingStyle} headinglevel={content.headingLevel} title={content.title}/>
                <Paragraph paraClass={content.paragraphStyle} content={content.content} />
                <Link icon={content.icon} linkProp={content.el} linktype={content.style} linkurl={content.url} linkName={content.title} />
            </div>
          </div>
        </Col>
    );

      return (
        <Grid>
          <Row>
            {content}
          </Row>
        </Grid>
      )
    }
  }

  export default BrandCard;