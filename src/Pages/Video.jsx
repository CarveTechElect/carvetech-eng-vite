import React from "react";

function Video() {
    return (
        <div className="pic-main-container">
            <span className="pic-set-title">Electrical Works</span>
        <div className="gallery-picture-container">
            <div className="gallery-picture-set">
                <img src={electpic1} alt="electpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={electpic2} alt="electpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={electpic3} alt="electpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={electpic4} alt="electpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={electpic5} alt="electpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={electpic6} alt="electpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>
        </div>

        <span className="pic-set-title">Solar Installation Works</span>
        <div className="gallery-picture-container">
            <div className="gallery-picture-set">
                <img src={solarpic1} alt="solarpic" className="workpic" />
                <span className="pic-caption">Panel Maintainance  <br />
                Ikeja, Lagos State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={solarpic2} alt="solarpic" className="workpic" />
                <span className="pic-caption">POP Lighting Decoration <br />
                Igbogbo, Ogun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={solarpic3} alt="solarpic" className="workpic" />
                <span className="pic-caption">8kvA Inverter Setup <br />
                Ibadan, Osun State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={solarpic4} alt="solarpic" className="workpic" />
                <span className="pic-caption">5KvA Times Three Load Separator <br />
                Ajah, Lagos State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={solarpic5} alt="solarpic" className="workpic" />
                <span className="pic-caption">Panel Upgrade Installation <br />
                Ajah, Lagos State</span>
            </div>

            <div className="gallery-picture-set">
                <img src={solarpic6} alt="solarpic" className="workpic" />
                <span className="pic-caption">Panel Upgrade Installation <br />
                Ajah, Lagos State</span>
            </div>
        </div>
        </div>
    )
}

export default Video;