import { useState } from 'react'

function TodoForm({addTodo}) {
    const [inputValue, setInputValue] = useState('')
   
    const handleInputChange = (event)=>{
    setInputValue(event.target.value)
    };
    const handleSubmit = (event)=>{
     event.preventDefault();
     addTodo(inputValue);

     setInputValue('');
    };

   return(
        <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Enter Task'/>
        <button type='submit'>Add Task</button>
        </form>
   );

}
export default TodoForm