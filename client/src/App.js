import './App.css';
import Header from './components/Header.js';
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import {Provider} from './context.js'

function App() {
    return (
        <Provider>
            <div className="app-container">
                <Header/>
                <AddTodo/>
                <Todos/>
            </div>
        </Provider>
    );
}

export default App;
