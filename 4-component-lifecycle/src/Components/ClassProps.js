import React, { Component } from 'react'

class ClassProps extends Component {
    render() {
        return (
            <div>
                <h3>This is Props. Hi {this.props.name} {this.props.place}</h3>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default ClassProps
