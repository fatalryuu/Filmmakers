import React, {useMemo} from 'react';
import {GoogleMap, MarkerF} from "@react-google-maps/api";
import s from './MyMap.module.css'
import {useTranslation} from "react-i18next";

const MyMap = (props) => {
    const {t} = useTranslation();
    const center = useMemo(() => ({lat: 44, lng: -80}), []);
    return (
        <div className={s.wrapper}>
            <h1>{t('place_of_work')}</h1>
            <GoogleMap zoom={10} center={center} mapContainerClassName={s.container}>
                <MarkerF position={center} />
            </GoogleMap>
        </div>
    )
}

export default MyMap;