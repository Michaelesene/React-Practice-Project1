import React from 'react';

class Human extends React.Component {
    render () {
        return (
            <div>
                <h1>My name is {this.props.name}</h1>
                <p>Eye Color: {this.props.age}</p>
            </div>
        )
    }
}