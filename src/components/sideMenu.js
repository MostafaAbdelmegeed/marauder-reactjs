import React, { Component } from 'react';
import './sideMenu.css';
import { NavLink } from "react-router-dom";

export default class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }


    render() {
        return (
            <div className="SideMenu-container">
                <ul className="SideMenu-list">
                    <li className="SideMenu-listheader" >Available Devices</li>
                    {this.props.items.map((item) => {
                        return (
                            <NavLink to={{ pathname: `/devices/${item.id}` }}>
                                <li className="SideMenu-listitem" key={item.id}>
                                    {item.name}
                                </li>
                            </NavLink>
                        );
                    })}
                </ul>

            </div>


        );
    }

}