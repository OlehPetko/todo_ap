const initialState = {
    todos: [
        {id: Math.random(), title: 'Liverpool', done: true},
        {id: Math.random(), title: 'London', done: true},
        {id: Math.random(), title: 'Vancouver', done: true},
        {id: Math.random(), title: 'Toronto', done: true},
        {id: Math.random(), title: 'San-francisco', done: true},
    ]
}
const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state, todos: [...state.todos, {id: Math.random(), title: action.payload, done: true}]
            }
        case 'OPEN_TODO':
            return {
                ...state, todos: state.todos.map(el => el.id === action.payload ? {...el, done: !el.done} : el)
            }
        case 'DELETE_TODO':
            return {
                ...state, todos: state.todos.filter(el => el.id !== action.payload)
            }
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(el => el.id === action.payload.todoId ? {
                    ...el,
                    done: !el.done,
                    title: action.payload.updateTodo
                } : el)
            }


        default:
            return state
    }
}

export default tasks