import React, { Component } from "react";

export default class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>Olá, {this.props.name}</h1>
                <p>Idade: {this.props.age}</p>
                <p>Profissão: {this.props.profession}</p>
            </div>
        );

    }
}