import React, {Component} from 'react';

export class User extends React.Component {
    render() {
        return (<div>
            <h3>Hello {this.props.name}</h3>
        </div>)
    }
}