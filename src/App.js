import { useState, useEffect } from 'react'
import './App.css';

// Components
import Fields from './components/Fields'
import TodoList from './components/TodoList'

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="App">
      <Fields todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
