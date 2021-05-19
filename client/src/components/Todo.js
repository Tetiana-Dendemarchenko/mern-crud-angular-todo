import React, {Component} from 'react';
import {Consumer} from "../context";
import axios from "axios";

export default class Todo extends Component {
    style = () => {
        const { complete } = this.props.todo;
        return { textDecoration: complete ? "line-through" : "none" }
    }
    toggle = (id, dispatch) => {
        dispatch ( { type: "TOGGLE", payload: id } );
    }
    delete = (id, dispatch) => {
        axios.delete ( `/todos/${id}` )
            .then ( () => dispatch ( { type: "DELETE", payload: id } ) )
    }

    render() {
        const { title, _id } = this.props.todo;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return <h3 className="text-dark text-center p-1 bg-light border-bottom" style={this.style ()}>
                        <i className="far fa-times-circle fa-sm float-start m-2 text-danger"
                           onClick={this.delete.bind ( this, _id, dispatch )}/>{title}
                        <input type="checkbox" className="mt-2 float-end"
                               onChange={this.toggle.bind ( this, _id, dispatch )}/>
                    </h3>
                }}
            </Consumer>
        )
    }
}
