import React from 'react';
import './header.css';

export default function Header(props) {

    return (
        <div className="Header-container">
                <img className="Logo" src={require("./logo.png")} alt="Marauder-logo" />
        </div>
    );
}