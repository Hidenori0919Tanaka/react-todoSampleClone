import { useState } from 'react';

const Todo = () => {
    const initialState = [
        {
            task: '',
            isCompleted: false
        }
    ];
    const [todos, setTodos] = useState(initialState);
    const [task, setTask] = useState('')
    const handleOnSubmit = (event) => {
        event.preventDefault()
        if (task === '') return
        setTodos(todos => [...todos, { task, isCompleted: false }])
        setTask('')
    }
    const handleNewTask = (event) => {
        setTask(event.target.value)
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <form onSubmit={handleOnSubmit}>
                Add Task :
                <input
                    value={task}
                    placeholder="Add New Task"
                    onChange={handleNewTask}
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    todos.length > 1 && todos.task !== '' && todos.isCompleted ?
                        <li key={index}>{todo.task}</li> : <li></li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;