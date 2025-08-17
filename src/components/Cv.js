import React from "react";
import cv from "../assets/CV/Mai_Dinh_Truong_Intern.pdf";

export const Cv = () => {
    return (
        <div className="cv">
            <a href={cv} download="MaiDinhTruong.pdf">
                <span className="tagline">Download CV</span>
            </a>
        </div>
    );
};
