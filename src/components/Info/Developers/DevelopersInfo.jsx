import React from 'react';
import Developer from "./Developer/Developer"
import s from "./DevelopersInfo.module.css"

const DevelopersInfo = (props) => {
    return (
        <div className={s.wrapper}>
            <h1>Информация о разработчиках</h1>
            <div className={s.list}>
                {props.info.map((info, i) => <Developer key={i} info={info}/>)}
            </div>
        </div>
    );
}

export default DevelopersInfo;