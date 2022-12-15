import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"

function About() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className="vertical-timeline-element--eduation" 
        date="2015 - 2018"
        iconStyle={{background:"#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
          C. K. McClatchy HS, Sacramento, CA
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--eduation" 
        date="2018 - 2022"
        iconStyle={{background:"#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
          UC Davis
          </h3>
          <p>Bachelor of Science, Biomedical Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--work" 
        date="July 2021 - July 2022 "
        iconStyle={{background:"orange", color: "#fff"}}
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
          Student Assistant, Sacramento Dept of Utilities
          </h3>
          <p>Fiscal Opertations Department</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--eduation" 
        date="2022 - Ongoing"
        iconStyle={{background:"#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
          UC Irvine
          </h3>
          <h5 className='vertical-timeline-element-subtitile'>
            In Progress
          </h5>
          <p>Master of Science, Biomedical Engieering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--work" 
        date="July 2022 - Ongoing"
        iconStyle={{background:"orange", color: "#fff"}}
        icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
          UCI Graduate Student Researcher
          </h3>
          <h5 className='vertical-timeline-element-subtitile'>
            <a href="https://brewer.eng.uci.edu/">Brewer Lab</a>
          </h5>
          <p>Full Fee Remission</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default About