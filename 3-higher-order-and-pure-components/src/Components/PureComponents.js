import React, { PureComponent } from 'react'

export class PureComponents extends PureComponent {
    render() {
        console.log("Pure Rendering");      
        return (
            <div>
                <p>This is the Pure Component {this.props.name}</p>
            </div>
        )
    }
}

export default PureComponents
