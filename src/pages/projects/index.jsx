import TimelineElement from "@/components/TimelineElements";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import style from "./style.module.scss";
import { workData } from "@/apis/projectsData";
import WaveCommon from "@/components/Common/Wave";
import { isMobileOnly } from "react-device-detect";

const Projects = () => {
  const [projectData, setProjectData] = useState('all');
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileOnly);
  }, [isMobileOnly]);
  const filteredData = workData?.filter((item) => projectData === 'all' ? item : item.tag === projectData)
  return (
    <div className={style.main}>
        <WaveCommon text={'Projects'} color={'rgba(79, 70, 229, 0.9450980392)'} />

      <div className={style.projectButtons}>
        <button
          className="bg-blue-900 hover:bg-blue-700 focus:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          onClick={() => setProjectData("all")}
        >
          All
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 focus:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          onClick={() => setProjectData("ongoing")}
        >
          Ongoing
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 focus:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          onClick={() => setProjectData("upcoming")}
        >
          Upcoming
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 focus:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          onClick={() => setProjectData("closed")}
        >
          Closed
        </button>
      </div>

      <VerticalTimeline animate={!isMobile}>
        {filteredData.map((item, index) => (
          <TimelineElement key={index} data={item} isWork={index % 2} />
        ))}
        {/* {educationData.map((item, index) => (
          <TimelineElement
            key={`education-${index}`}
            data={item}
            isWork={false}
          />
        ))} */}
        {/* <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<HandymanSharpIcon />}
        /> */}
      </VerticalTimeline>
    </div>
  );
};

export default Projects;
