import React, { Component } from 'react';
import Red from './img/red.jpeg';
import Green from './img/green.png';

export class StateComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message: "Jajal Wae",
            tell: "Jajal",
            imageURL: Red
        }
    }

    styles = {
        fontStyle: "bold",
        color: "gray"
    }

    ButtonChange=()=>{
        this.setState({
            message: "Lho Kelar",
            imageURL: Green
        });
    }

    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>{this.state.tell}</button>
                <br/>
                <img src={this.state.imageURL}></img>
            </div>
        )
    }
}

export default StateComponent
