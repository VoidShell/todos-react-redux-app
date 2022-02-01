const Todo = ({todo, onRemove, onToggle}) => {
    return (
        <div>
            <input type="checkbox" onClick={() => onToggle(todo.id)} readOnly />
            <span style={{textDecoration: todo.done ? 'line-through' : 'none'}}>
                {todo.text}
            </span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    )
}

const Todos = ({todos, input, onChangeInput, onInsert, onRemove, onToggle}) => {

    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    }

    const onChange = e => {
        onChangeInput(e.target.value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange}/>
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                    ))}
            </div>
        </div>
    )
}

export default Todos;