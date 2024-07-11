import TodoForm from './TodoForm.jsx'
import TodoList from './TodoList.jsx'
import { useState } from 'react'

const TodoApp = () =>{
const [todos, setTodo] = useState([])

const addTodo = (todo) => {
   setTodo([...todos, {id: todo.length + 1, task: todo, completed:false}])
   console.log(todos)
};

const markAsComplete = id => {
    setTodo(todos.map(todo => {
      if(todo.id === id){
         todo.completed = !todo.completed
       }
       return todo
      }
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