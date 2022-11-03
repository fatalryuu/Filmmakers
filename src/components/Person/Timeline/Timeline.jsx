import React from 'react';
import timelineElements from "../../../data/timelineElements";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {ReactComponent as WorkIcon} from "../camera-reels.svg";
import {ReactComponent as SchoolIcon} from "../school.svg";
import {ReactComponent as ChildIcon} from "../puzzle.svg";

const Timeline = (props) => {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    let childIconStyles = { background: "#FF83FCFF" };
    return (
        <VerticalTimeline>
            {timelineElements[props.info.id - 1].map((element) => {
                return (
                    <VerticalTimelineElement
                        key={element.id}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={element.icon === "work" ? workIconStyles : element.icon === "school" ? schoolIconStyles : childIconStyles}
                        icon={element.icon === "work" ? <WorkIcon /> : element.icon === "school" ? <SchoolIcon /> : <ChildIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <p id="description">{element.description}</p>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
    );
};

export default Timeline;