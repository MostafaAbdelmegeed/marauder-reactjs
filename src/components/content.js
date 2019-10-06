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

    constructor(props) {
        super(props);
        
    }


    componentDidMount() {


    }



    render() {
        return (
            <div className="Content-container">
                <SideMenu items={[{
                    id: 0,
                    name: "ECG-001",
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