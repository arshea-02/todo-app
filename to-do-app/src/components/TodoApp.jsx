import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'
import { useState } from 'react'

const TodoApp = () =>{
const [todos, setTodo] = useState([])
let lastAssignedid = 0;

function assignid() { 
  setTodo(todos.map((todo, index) => (
    todo.id = index
  )))
}
const addTodo = (todo) => {
  setTodo([...todos, {id: assignid(), task: todo, completed:false}])
  console.log(todos)
};

const toggleComplete = (id) => {
    setTodo(todos.map(todo => todo.id === id? {...todos,
      comleted: !todo.completed} : todo
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
        complete={ toggleComplete } deleteItem={deleteItem} />

      ))}
      </ul>
    </div>
  </> 
) 
}
export default TodoApp