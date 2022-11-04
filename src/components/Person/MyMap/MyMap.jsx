import React from 'react';
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css';
import s from './MyMap.module.css'
import {useTranslation} from "react-i18next";

const MyMap = (props) => {
    const {t} = useTranslation();
    return (
        <div className={s.wrapper}>
            <h1>{t('place_of_work')}</h1>
            <Map mapLib={maplibregl}
                 initialViewState={{
                     longitude: props.coordinates.longitude,
                     latitude: props.coordinates.latitude,
                     zoom: 14
                 }}
                 style={{width: "500px", height: "500px", margin: "0 auto"}}
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