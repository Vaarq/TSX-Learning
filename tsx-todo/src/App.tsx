import React from 'react';
import {TodoListItem} from "./TodoListItem";

const todos: Todo[] = [
  {
    text: "Finish my code",
    complete: false
  },
];

function App() {
  return (
    <ul>
    <TodoListItem todo={todos[0]} />
    <TodoListItem todo={todos[1]} />
    </ul>
  );
}

export default App;
