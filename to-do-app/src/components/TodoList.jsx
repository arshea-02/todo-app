import trashcicon from 'D:/React/to-do-app/todo-app/to-do-app/src/assets/trash-can-10417.svg'


const TodoList = ({task, markAsComplete, deleteItem}) => {
    return (
        <li className='listItem'>
        <div>
        <p onClick={()=> markAsComplete(task.id)} 
        className={`${task.completed ? 'completed':
        ''}`}>{task.task}</p>
        <img src={trashcicon} onClick={() => deleteItem(task.id)}/>
        </div>
        </li>
    )
}

export default TodoList