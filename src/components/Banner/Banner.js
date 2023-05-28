import React from 'react';
import './banner.css';

const Banner = ({title}) => {
    return (
        <header className="banner">
            <h1 className="banner-title">{title}</h1>
            <p className="banner-subtitle">There's nothing wrong with adding some more hope to your day.</p>
        </header>
    )
}

export default Banner;