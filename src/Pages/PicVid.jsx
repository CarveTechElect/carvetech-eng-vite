import React, { useState } from "react";
import './PicVid.css';
import Picture from "./Picture";
import Video from "./Videi";

const PicVid = () => {
    // State to manage which form is visible
    const [activePage, setActivePage] = useState("Picture"); // Default is "signup"

    // Function to handle button clicks
    const handlePageChange = (page) => {
        setActivePage(page);
    };

    return (
        <div className="main-user-container">
            
           
            <div className="user-container">
                {/* Buttons to toggle between Sign Up and Sign In */}
                <button
                    className={`Picture ${activePage === "Picture" ? "active" : ""}`}
                    onClick={() => handlePageChange("Picture")}
                >
                    Pictures
                </button>
                <button
                    className={`Video ${activePage === "Video" ? "active" : ""}`}
                    onClick={() => handlePageChange("Video")}
                >
                    Videos
                </button>
            </div>

            {/* Conditional rendering of components */}
            {activePage === "Picture" && <Picture />}
            {activePage === "Video" && <Video />}
        </div>
    );
};

export default PicVid;
