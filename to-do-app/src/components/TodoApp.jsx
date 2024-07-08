import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'
import { useState } from 'react'

const TodoApp = () =>{
const [todos, setTodo] = useState([])

function assignid() { 
  setTodo(todos.map((todo, index) => (
    todo.id = index
  )))
}
const addTodo = (todo) => {
  setTodo([...todos, {id: assignid(), task: todo, completed:false}])
};

const markAsComplete = id => {
    setTodo(todos.map(todo => todo.id === id ? todo.comleted = !todo.completed : todo
    ));
};

const deleteItem = (id) => {
    setTodo(todos.filter(todo => todo.id !== id))
};
return (
  <>  
    <div className='todo-app'>
      <h1>Produx</h1>
      <TodoForm addTodo={ addTodo }/>
      <ul>
      {todos.map((todo, index) =>(
        <TodoList task={ todo } key={ index }
        markAsComplete={ markAsComplete } deleteItem={deleteItem} />

      ))}
      </ul>
    </div>
  </> 
) 
}
export default TodoApp