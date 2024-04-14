import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import HandymanSharpIcon from '@mui/icons-material/HandymanSharp';

const TimelineElement = ({ data, isWork }) => {
  const { date, title, subtitle, description, iconStyle, contentStyle, contentArrowStyle } = data;
  console.log(isWork)
  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${isWork ? 'work' : 'education'}`}
      date={<span style={{ color: '#000' }}>{date}</span>}
      iconStyle={iconStyle}
      icon={<HandymanSharpIcon />}
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;