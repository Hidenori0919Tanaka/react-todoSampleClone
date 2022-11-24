import { useState } from 'react';

const Todo = () => {
    const initialState = [
        {
            task: '',
            isCompleted: false
        }
    ];
    const [text, setText] = useState(initialState);

    return (
        <div>
            <h1>ToDo List</h1>
            <ul>
                {text.map((todo, index) => (
                    text.length > 1 && text.task !== '' && text.isCompleted ?
                        <li key={index}>{todo.task}</li> : <li></li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;