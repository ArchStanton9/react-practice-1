import React, { Component } from 'react';
import './App.css';
import Timer from './Timer.jsx'
import { Form, FormControl } from 'react-bootstrap'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    render() {
        const elems = Object.keys(this.state).map(key =>
            <Form className="InputForm" key={key}>
                <label>{key}:</label>
                <FormControl
                    className='InputFormControl'
                    placeholder='0'
                    onChange={event => this.setState({ [key]: event.target.value })} />
            </Form>
        );

        return (
            <div className="App">
                {elems}
                <Timer time={this.state.hours * 3600
                    + this.state.minutes * 60
                    + this.state.seconds} />
            </div>
        );
    }
}

export default App;
