import React, { useState } from "react";
import backimg from "./Images/back6.jpeg";
import "./Gallery.css";
import electpic1 from './Work/2021-10-28 (1).jpg';
import electpic2 from './Work/2021-10-28 (4).jpg';
import electpic3 from './Work/2021-10-28 (5).jpg';
import electpic4 from './Work/elect11.jpg';
import electpic5 from './Work/elect12.jpg';
import electpic6 from './Work/2021-10-28 (2).jpg';
import solarpic1 from './Work/solar3.jpg';
import solarpic2 from './Work/IMG_20220919_163159.jpg';
import solarpic3 from './Work/IMG_20220901_100157.jpg';
import solarpic4 from './Work/One.jpg';
import solarpic5 from './Work/Six.jpg';
import solarpic6 from './Work/Three.jpg';

const electricalPics = [
    { src: electpic1, caption: "POP Lighting Decoration - Igbogbo, Ogun State" },
    { src: electpic2, caption: "POP Lighting Decoration - Igbogbo, Ogun State" },
    { src: electpic3, caption: "POP Lighting Decoration - Igbogbo, Ogun State" },
    { src: electpic4, caption: "POP Lighting Decoration - Igbogbo, Ogun State" },
    { src: electpic5, caption: "POP Lighting Decoration - Igbogbo, Ogun State" },
    { src: electpic6, caption: "POP Lighting Decoration - Igbogbo, Ogun State" }
];

const solarPics = [
    { src: solarpic1, caption: "Panel Maintenance - Ikeja, Lagos State" },
    { src: solarpic2, caption: "POP Lighting Decoration - Igbogbo, Ogun State" },
    { src: solarpic3, caption: "8kVA Inverter Setup - Ibadan, Osun State" },
    { src: solarpic4, caption: "5kVA Times Three Load Separator - Ajah, Lagos State" },
    { src: solarpic5, caption: "Panel Upgrade Installation - Ajah, Lagos State" },
    { src: solarpic6, caption: "Panel Upgrade Installation - Ajah, Lagos State" }
];

const videoLinks = [
    { url: "https://www.youtube.com/embed/D8U-_xCAg4Q", caption: "Applying New Techniques for Safety" }
];

const GalleryPage = () => {
    const [showPictures, setShowPictures] = useState(true);

    return (
        <div className="gallery-container">
            <img src={backimg} alt="Gallery Background" className="gallery-background" />
            <span className="gallery-text">Our Gallery</span>
            
            <div className="pic-vid-container">
                <button className={`toggle-button ${showPictures ? 'active' : ''}`} onClick={() => setShowPictures(true)}>Pictures</button>
                <button className={`toggle-button ${!showPictures ? 'active' : ''}`} onClick={() => setShowPictures(false)}>Videos</button>
            </div>

            {/* Picture container */}
            {showPictures && (
                <div className="pictures-container">
                    <span className="pic-set-title">Electrical Works</span>
                    <div className="gallery-picture-container">
                        {electricalPics.map((pic, index) => (
                            <div className="gallery-picture-set" key={index}>
                                <img src={pic.src} alt="electpic" className="workpic" />
                                <span className="pic-caption">{pic.caption}</span>
                            </div>
                        ))}
                    </div>
                    <span className="pic-set-title">Solar Installation Works</span>
                    <div className="gallery-picture-container">
                        {solarPics.map((pic, index) => (
                            <div className="gallery-picture-set" key={index}>
                                <img src={pic.src} alt="solarpic" className="workpic" />
                                <span className="pic-caption">{pic.caption}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Video container */}
            {!showPictures && (
                <div className="videos-container">
                    <span className="vid-set-title">Electrical Works</span>
                    <div className="gallery-video-container">
                        {videoLinks.map((video, index) => (
                            <div className="gallery-video-set" key={index}>
                                <iframe 
                                    width="560" 
                                    height="315" 
                                    src={video.url} 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen>
                                </iframe>
                                <span className="video-caption">{video.caption}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
