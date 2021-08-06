import React, { Component } from 'react'

export class NewComponent extends Component {
    styles = {
        fontStyle: "bold",
        color: "teal"
    };

    render() {
        return (
            <div className="NewComponent">
                <h3 style={this.styles}>Welcome</h3>
            </div>
        )
    }
}

export default NewComponent
