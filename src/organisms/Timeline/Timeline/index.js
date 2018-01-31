//Base
import React, { Component } from 'react';

//Components
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class TL extends Component {
  render() {
    return (
      <section>
        <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Senior Front End Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
                <p>
                    Technical Delivery, Estimation, Development, Line Management
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Interface Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
                <p>
                    Bug Fixing, Development, Managing Offshore Teams
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2015"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Graduate Interface Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
                <p>
                    Front End Development
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June 2015"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Bachelor Of Arts (Hons) in Creative Digital Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                    Web Development, UX Design, Photography, Film 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="July 2011"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">BTEC Level 3 IT Practitioners</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                    Networking, Computer Hardware, Server Configuration, Database Management
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    );
  }
}

export default TL;
