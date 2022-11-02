import React from 'react';
import s from "./Card.module.css"
import {NavLink} from "react-router-dom";

function Card(props) {
    return(
        <div className={s.filmmaker}>
            <NavLink to={props.person.url}><img alt="" src={props.person.imgPath} /></NavLink>
            <h2>{props.person.name}</h2>
        </div>
    );
}

export default Card;