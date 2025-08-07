import React from "react";
import cv from "../assets/CV/CV_Mai_Dinh_Truong_Fullstack_Developer.pdf";

export const Cv = () => {
    return (
        <div className="cv">
            <a href={cv} download="MaiDinhTruong.pdf">
                <span className="tagline">Download CV</span>
            </a>
        </div>
    );
};
