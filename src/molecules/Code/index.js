//Base
import React, { Component } from 'react';
import CodeBlock from '../../atoms/CodeBlock';
import Paragraph from '../../atoms/Paragraph';
import Link from '../../atoms/Links';
import Heading from '../../atoms/Heading';
import './index.css'

class BlockCode extends Component {
    render() {
        let code;

        code = this.props.content.map((content) =>
            <div>
                <Heading titleStyle={content.headingClass} headinglevel='2' title={content.heading} />
                <CodeBlock codeClass={content.class} content={content.content} />
                <Paragraph paraClass={content.paraClass} content={content.mainContent} />
                <ul className={content.listStyle}>
                    {content.links.map((link)=>
                        <Link isNavLink={link.isNavLink} linkurl={link.linkurl} linkProp={link.el} linkName={link.title} linktype={link.style} />
                    )}
                </ul>
            </div>
        );


        return (
        <section className={this.props.sectionClass}>
            {code}
        </section>
        )
    }
}

  export default BlockCode;