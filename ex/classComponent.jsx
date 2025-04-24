import React, { Component } from "react";

export default class ClassComponent extends Component {
    render() {
        this.state = {
            name: this.props.name,
            age: this.props.age,
            profession: this.props.profession
        };

        return (
            <div>
            <h1>Olá, {this.state.name}</h1>
            <p>Idade: {this.state.age}</p>
            <p>Profissão: {this.state.profession}</p>
            </div>
        );

    }
}