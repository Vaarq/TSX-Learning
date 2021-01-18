import React, {useState} from 'react';
import {TodoListItem} from "./TodoListItem";

const initialTodos: Todo[] = [
  {
    text: "Finish my code",
    complete: false
  },
  {
    text: "blah",
    complete: true
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ul>
    <TodoListItem todo={todos[0]} />
    <TodoListItem todo={todos[1]} />
    </ul>
  );
}

export default App;
