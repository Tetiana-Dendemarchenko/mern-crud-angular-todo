import React, {Component} from 'react';
import axios from "axios";

const Context = React.createContext ();

const reducer = (prevState, action) => {
    switch (action.type) {
        case "TOGGLE":
            return {
                todos: prevState.todos.map ( task => {
                    if ( task._id === action.payload ) {
                        task.complete =
                            ! task.complete
                    }
                    ;
                    return task
                } )
            }

        case "DELETE":
            return { todos: prevState.todos.filter ( task => task._id !== action.payload ) }

        case "ADD":
            return { todos: [...prevState.todos, action.payload] }

        default:
            return prevState
    }
}

export class Provider extends Component {
    state = {
        todos: [],
        dispatch: (action) => this.setState ( prevState => reducer ( prevState, action ) )
    }

    componentDidMount() {
        axios.get ( "/todos" )
            .then ( res => this.setState ( { todos: res.data } ) )
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
