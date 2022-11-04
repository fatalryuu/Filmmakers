import React from 'react';
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css';
import s from './MyMap.module.css'
import {useTranslation} from "react-i18next";

const MyMap = (props) => {
    const {t} = useTranslation();
    let width;
    let height;
    if (window.innerWidth < 991) {
        width = "300px";
        height = "300px";
    }
    return (
        <div className={s.wrapper}>
            <h1>{t('place_of_work')}</h1>
            <Map mapLib={maplibregl}
                 initialViewState={{
                     longitude: props.coordinates.longitude,
                     latitude: props.coordinates.latitude,
                     zoom: 14
                 }}
                 style={{width: width, height: height, margin: "0 auto"}}
                 mapStyle="https://api.maptiler.com/maps/streets/style.json?key=0SSrcwvFMrE1W8cblstH"
            >
                <NavigationControl position="top-left"/>
                <Marker longitude={props.coordinates.longitude}
                        latitude={props.coordinates.latitude}
                        color='#61dbfb' />
            </Map>
        </div>
    )
}

export default MyMap;