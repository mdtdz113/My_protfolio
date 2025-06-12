import React from "react";
import cv from "../assets/CV/CV_TTS.pdf"

export const Cv = () => {
    return (
        <div className="cv">
            <a href={cv} download="MaiDinhTruong.pdf">
                <button>Download CV</button>
            </a>
        </div>
    );
};
