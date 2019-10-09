import React, { Component } from 'react';
import './content.css';
import SideMenu from './sideMenu';
import Map from './map';
import { Route, Switch } from "react-router-dom";


function NotFound() {
    return (
        <div>
            404 Not Found!
        </div>
    );
}


export default class Content extends Component {

    render() {
        return (
            <div className="Content-container">
                <SideMenu items={[{
                    id: 0,
                    name: "ECG-001",
                },{
                    id:1,
                    name: "ECG-002"
                },{
                    id:2,
                    name: "ECG-003"
                },{
                    id:3,
                    name: "Defibrillator-001"
                },{
                    id:4,
                    name: "Defibrillator-002"
                },{
                    id:5,
                    name: "Defibrillator-003"
                },{
                    id:6,
                    name: "Electrosurgery-001"
                },{
                    id:7,
                    name: "Electrosurgery-002"
                },{
                    id:8,
                    name: "Electrosurgery-003"
                }]} />
                <Switch>
                    <Route exact path={"/devices/0"} render={() => <Map/>} />
                    <Route exact path="/" component={Map} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}