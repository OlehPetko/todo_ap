import './App.css';
import {connect} from "react-redux";
import {useState} from "react";
import Counter from "./Counter";
import CounteRedux from "./CounteRedux";


function App(props) {

    const {todos} = props
    const [inputTodo, setInputTodo] = useState([])
    const [updateTodo, setUpdateTodo] = useState([])

    const addNewTask = () => {
        props.addTodo(inputTodo)
        setInputTodo([])
    }

    return (
        <div className="App">
            <input placeholder='new task' value={inputTodo} onChange={event => setInputTodo(event.target.value)}/>
            <button onClick={addNewTask}>add task</button>
            {todos.map(todo =>
                <div>
                    <h2>
                        {todo.title}
                    </h2>
                    {todo.done ?
                        <button onClick={() => props.openUpdateCancel(todo.id)}>update Task</button>
                        :
                        <div>
                            <input value={updateTodo} onChange={event => setUpdateTodo(event.target.value)}/>
                            <button onClick={() => props.updateSave(todo.id, updateTodo)}>save</button>
                            <button onClick={() => props.openUpdateCancel(todo.id)}>cancel</button>
                        </div>
                    }
                    <button onClick={() => props.deleteTodo(todo.id)}>delete</button>
                </div>
            )}
            <hr/>
            <Counter />
            <hr/>
            <CounteRedux />
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (inputTodo) => dispatch({type: 'ADD_TODO', payload: inputTodo}),
    openUpdateCancel: (todoId) => dispatch({type: 'OPEN_TODO', payload: todoId}),
    deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId}),
    updateSave: (todoId, updateTodo) => dispatch({type: 'UPDATE_TODO', payload: {todoId, updateTodo}})
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
