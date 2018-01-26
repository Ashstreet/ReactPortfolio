//Base
import React, { Component } from 'react';

//Component
import Code from '../../molecules/Code';

class IntroSection extends Component {
  render() {
    let codeArray = [
      {
        id: 0,
        heading: 'Links',
        links: [
          {
            id: 0,
            title: 'Anchor',
            el: 'a',
            style: 'nav-link',
            linkurl: '/',
            isNavLink: true
          },
          {
            id: 1,
            title: 'Button',
            el: 'button',
            style: 'btn',
          }
        ],
        content: 'const Tag = this.props.linkProp,\n      isNavLink = this.props.isNavLink;\n\nlet element;\n\nisNavLink ? element = <Link to={this.props.linkurl} activeClassName="active" className={this.props.linktype}>{this.props.linkName}</Link>\n          : element = <Tag className={this.props.linktype} href={this.props.linkurl}>{this.props.linkName}</Tag>\n\nreturn (\n    <li>{element}</li>\n);',
        class: 'code-block',
        listStyle: 'center',
        paraClass: 'code-paragraph',
        headingClass: 'article-heading',
        introParaClass: 'code-intro',
        introParaContent: 'Links can be made just once with just a couple lines.',
        mainContent: "Links can be made with just a couple lines of code. The code above is what I use for links. I have configured this component to be able render the appropriate element depending on the linkProp passed to it. It is also able to take a Boolean value, and depending on if that value is true or false it will either render element that utilises React Router or a normal element. This component is very versatile and depending on the need can be used for every type of link or button as demonstrated in the example below."
      }
    ];

    return (
      <Code sectionClass = 'code-section'
            content = {codeArray}
      />
    )
  }
}

export default IntroSection;
