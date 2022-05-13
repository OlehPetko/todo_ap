const initialState = {
    todos: [
        {id: Math.random(), title: 'Liverpool', done: true},
        {id: Math.random(), title: 'London', done: true},
        {id: Math.random(), title: 'Vancouver', done: true},
        {id: Math.random(), title: 'Toronto', done: true},
        {id: Math.random(), title: 'San-francisco', done: true},
    ],
    counter: [
        {id: Math.random(), task: 1},
        {id: Math.random(), task: 2},
        {id: Math.random(), task: 3},
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
        case 'PLUS_MINUS':
            return {
                ...state, counter: state.counter.map(el => el.id === action.payload.taskId ? {
                    ...el, task: el.task + action.payload.taskValue
                    } : el
                )
            }


        default:
            return state
    }
}

export default tasks