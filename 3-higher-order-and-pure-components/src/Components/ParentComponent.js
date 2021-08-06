import React, { Component } from 'react';
import PureComponents from './PureComponents';
import RegularComponent from './RegularComponent';

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
            
        this.state = {
            name: "Nama Asli"
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Nama Samaran"
            });
        }, 3000);
    }

    render() {
        console.log("Parent Rendering")
        return (
            <div>
                <p>This is Parent Component</p>
                <PureComponents name={this.state.name} />
                <RegularComponent name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent
