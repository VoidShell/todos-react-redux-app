import {createAction, handleActions} from "redux-actions";

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';

let id = 3;

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false,
}))
export const remove = createAction(REMOVE, id => id);
export const toggle = createAction(TOGGLE, id => id);

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '테스트1',
            done: false,
        },
        {
            id: 2,
            text: '테스트2',
            done: false,
        }
    ]
}

const todos = handleActions({
    [CHANGE_INPUT]: (state, action) => ({...state, input: action.payload}),
    [INSERT]: (state, action) => ({...state, todos: state.todos.concat(action.payload)}),
    [REMOVE]: (state, action) => ({...state, todos: state.todos.filter(todo => todo.id !== action.payload)}),
    [TOGGLE]: (state, action) => ({
        ...state, todos: state.todos.map(todo =>
            todo.id === action.payload
                ? {...todo, done: !todo.done} : todo)
    })
}, initialState)

export default todos;