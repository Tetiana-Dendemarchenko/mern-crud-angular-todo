import React, {Component} from "react";
import Todo from './Todo.js';
import {Consumer} from "../context";

export default class Todos extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { todos } = value;
                    return todos.map ( task => <Todo todo={task} key={task.id}/> )
                }}
            </Consumer>
        )
    }
}

