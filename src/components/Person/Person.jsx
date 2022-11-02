import React from 'react';
import s from './Person.module.css'
import "react-vertical-timeline-component/style.min.css"
import Timeline from "./Timeline/Timeline";
import MyMap from "./MyMap/MyMap";
import VideosList from "./Videos/VideosList";
import Gallery from "./Gallery/Gallery";

const Person = (props) => {
    return (
        <div className={s.wrapper}>
            <h1>{props.info.name}</h1>
            <div>({props.info.dateOfBirth} - {props.info.dateOfDeath})</div>
            <img src={props.info.imgPath} alt=""/>
            <Timeline info={props.info}/>
            <Gallery photos={props.info.photos}/>
            <VideosList links={props.info.links}/>
            <MyMap coordinates={props.info.coordinates}/>
        </div>
    );
};

export default Person;