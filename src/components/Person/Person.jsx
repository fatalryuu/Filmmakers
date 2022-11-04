import React from 'react';
import s from './Person.module.css'
import "react-vertical-timeline-component/style.min.css"
import Timeline from "./Timeline/Timeline";
import MyMap from "./MyMap/MyMap";
import VideosList from "./Videos/VideosList";
import Gallery from "./Gallery/Gallery";
import {useTranslation} from "react-i18next";

const Person = (props) => {
    const {t} = useTranslation();
    const name = props.info.name_en.toLowerCase().split(' ').join('_');
    return (
        <div className={s.wrapper}>
            <h1>{t(name)}</h1>
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