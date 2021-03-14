import { useState } from 'react'
import './App.css';

// Components
import Fields from './components/Fields'
import TodoList from './components/TodoList'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [display, setDisplay] = useState(1);

  return (
    <div className="App">
      <Fields setDisplay={setDisplay} todoList={todoList} setTodoList={setTodoList} />
      <TodoList display={display} todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
