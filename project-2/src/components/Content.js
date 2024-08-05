import React from "react";
import photogridLogo from "../images/photo-grid.png"

export default function Content() {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center mt-4">
                <img className="photogrid--logo" src={photogridLogo} />
            </div>
            <div className="mt-3">
                <h2 className="fw-bold small--text">Online Experiences</h2>
                <div className="small--text fw-300">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </div>
            </div>
        </div>
    )
}