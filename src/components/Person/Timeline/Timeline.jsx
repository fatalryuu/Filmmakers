import React from 'react';
import timelineElements from "../../../data/timelineElements";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {ReactComponent as WorkIcon} from "../camera-reels.svg";
import {ReactComponent as SchoolIcon} from "../school.svg";
import {ReactComponent as PuzzleIcon} from "../puzzle.svg";

const Timeline = (props) => {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    return (
        <VerticalTimeline>
            {timelineElements[props.info.id - 1].map((element) => {
                return (
                    <VerticalTimelineElement
                        key={element.id}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={element.icon === "work" ? workIconStyles : schoolIconStyles}
                        icon={element.icon === "work" ? <WorkIcon /> : <SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            {element.location}
                        </h5>
                        <p id="description">{element.description}</p>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
    );
};

export default Timeline;