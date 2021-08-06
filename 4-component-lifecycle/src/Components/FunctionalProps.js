import React from 'react'

function FunctionalProps(props){
    return(
        <div>
            <h3>Hello {props.name}</h3>
            <h3>Hello {props.name} Nang {props.place}</h3>
        </div>
    );
}

export default FunctionalProps;