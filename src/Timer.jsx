import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './App.css'

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
    }

    start() {
        this.setState({ time: this.props.time })
        this.refreshIntervalId = setInterval(() => this.tick(), 1000);
    }

    tick() {
        let time = this.state.time;
        console.log(time);

        if (time === 0) {
            clearInterval(this.refreshIntervalId);
            alert('Time out!');
            return;
        }

        time = time - 1;
        this.setState({ time: time })
    }

    leadingZero(num) {
        return num < 10 ? '0' + num : num;
    }

    render() {
        const hours = Math.floor((this.state.time / 60 / 60) % 60);
        const minutes = Math.floor((this.state.time / 60) % 60);
        const seconds = this.state.time % 60;

        return (
            <div>
                <Button onClick={() => this.start()}>Start</Button>
                <div className='Display'>
                    <div>{this.leadingZero(hours)}:</div>
                    <div>{this.leadingZero(minutes)}:</div>
                    <div>{this.leadingZero(seconds)}</div>
                </div>
            </div>
        )
    }
}

export default Timer;
