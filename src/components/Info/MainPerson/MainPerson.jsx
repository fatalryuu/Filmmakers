import React from 'react';
import s from "./MainPerson.module.css"
import {NavLink} from "react-router-dom";

const MainPerson = (props) => {
    return (
        <div className={s.wrapper}>
            <h1>Деятель дня</h1>
            <img src={props.person.imgPath} alt=""/>
            <div>{props.person.name}</div>
            <div>({props.person.dateOfBirth} - {props.person.dateOfDeath})</div>
            <div>{props.person.someText}</div>
            <NavLink to={props.person.url}>Информация</NavLink>
        </div>
    );
};

export default MainPerson;