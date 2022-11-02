import React, {useState} from 'react';
import s from './Gallery.module.css'
import CloseIcon from '@mui/icons-material/Close';

const Gallery = (props) => {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <h1>Галерея</h1>
            <div className={model ? `${s.model} ${s.open}` : s.model}>
                <img src={tempImgSrc} alt=""/>
                <CloseIcon onClick={() => setModel(false)}/>
            </div>
            <div className={s.gallery}>
                {props.photos.map((imgSrc, i) => {
                    return (
                        <div className={s.pics} key={i} onClick={() => getImg(imgSrc)}>
                            <img src={imgSrc} alt="" style={{width: '100%'}}/>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Gallery;