import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import HandymanSharpIcon from '@mui/icons-material/HandymanSharp';

const TimelineElement = ({ data, isWork }) => {
  const { date, title, subtitle, description, iconStyle, contentStyle, contentArrowStyle } = data;
  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${isWork ? 'work' : 'education'}`}
      date={<span style={{ color: '#000' }}>{date}</span>}
      iconStyle={iconStyle}
      icon={<HandymanSharpIcon />}
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
    >
      <h3 style={{fontSize:'17px', marginBottom: '8px'}} className="vertical-timeline-element-title"><span style={{fontSize: '18px', fontWeight: '600'}}>Project: </span>{title}</h3>
      <h4 style={{fontSize:'17px'}} className="vertical-timeline-element-subtitle"><span style={{fontSize: '18px', fontWeight: '600'}}>Nature of work: </span>{subtitle}</h4>
      <p style={{fontSize: '15px', fontWeight: '400'}}><span style={{fontSize: '16px', fontWeight: '600'}}>Description: </span>{description}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;