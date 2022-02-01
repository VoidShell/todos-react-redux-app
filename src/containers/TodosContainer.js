import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {changeInput, insert, remove, toggle} from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = () => {
    const {input, todos} = useSelector(({input, todos}) => (
        {
            input: todos.input,
            todos: todos.todos,
        }
    ))
    // 구조분해할당을 하지 않을 경우
    // const input = useSelector(state =>
    //     state.todos.input
    // );
    // const todos = useSelector(state =>
    //     state.todos.todos,
    // );

    const dispatch = useDispatch();
    const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [dispatch]);
    const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
    const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
    const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);

    return (
        <Todos
            todos={todos}
            input={input}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onRemove={onRemove}
            onToggle={onToggle}
        />
    )
}

export default TodosContainer;