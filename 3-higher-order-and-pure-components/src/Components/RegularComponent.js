import React, { Component } from 'react'

export class RegularComponent extends Component {
    render() {  
        console.log("Regular Rendering");      
        return (            
            <div>
                <p>This is the Regular Component {this.props.name}</p>
            </div>
        )
    }
}

export default RegularComponent
