import React, { Component } from 'react';
import './map.css';
import firebase from 'firebase';



export default class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 50,
            y: 50,
            color: "red",
            ref: "",
            deviceUrl: "http://localhost:3000/devices/0"
        };
        this.canvasRef = React.createRef();
        this.blink = this.blink.bind(this);

        const firebaseConfig = {
            apiKey: "AIzaSyCGNTzsWW1JsDTkeOArUUryTYoS690TYMI",
            authDomain: "salty-hollows.firebaseapp.com",
            databaseURL: "https://salty-hollows.firebaseio.com",
            projectId: "salty-hollows",
            storageBucket: "salty-hollows.appspot.com",
            messagingSenderId: "727437693649",
            appId: "1:727437693649:web:b8db5130b87b37433c6bf0",
            measurementId: "G-KYK1N2MGLX"
        };
        this.map = firebase.initializeApp(firebaseConfig);
        this.db = this.map.database().ref().child('node-client');

    }

    componentWillMount() {
        // Replace hard coded data here with your fetched data!

        this.db.on('value', snapshot => {
            this.setState({
                x: snapshot.child('dimensions').val().x,
                y: snapshot.child("dimensions").val().y,
            })

        });
    }


    componentDidMount() {
        this.ref = window.location.href;
        // Replace hard coded data here with your fetched data!
        this.db.on('value', snapshot => {
            this.setState({
                x: snapshot.child('dimensions').val().x+2,
                y: snapshot.child("dimensions").val().y+10,
            })

        });
    
        const canvas = this.canvasRef.current;
        const context = canvas.getContext('2d');
        this.blinking = setInterval(
            () => this.blink(context, canvas), 100
        );

    }

    componentWillUnmount() {
        clearInterval(this.blinking)
        this.db.off();
    }



    blink(context, canvas) {
        if (this.state.color === "red") {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc((this.state.x / 100) * canvas.width, (this.state.y / 100) * canvas.height, 1.5, 0, 2 * Math.PI);
            context.fillStyle = "#f5f5ec";
            context.fill();
            this.setState({ color: "#f5f5ec" });
        } else {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc((this.state.x / 100) * canvas.width, (this.state.y / 100) * canvas.height, 1.5, 0, 2 * Math.PI);
            context.fillStyle = "red";
            context.fill();
            this.setState({ color: "red" });
        }
    }

    render() {

        return (
            <div className="Map-container">
                <canvas className="Canvas" ref={this.canvasRef} />
            </div>
        );
    }
}
