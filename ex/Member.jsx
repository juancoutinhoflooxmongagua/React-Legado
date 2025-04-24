import React from 'react';

export default props => { 
    return (
        <div>
            <h1>Member</h1>
            <p>{props.name}</p>
            <strong>{props.lastname}</strong>
        </div>
    )
}