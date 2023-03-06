
import React from "react"
import ReactDOM from "react-dom/client"

export default function NewItem(props){
 
    const [task, setTask] = React.useState('')

    function changeHandler(e) {
        setTask(e.target.value)
    }

    function submitHandler (e){
        e.preventDefault()
        const newTask = {task: task, complete: false}
        console.log(newTask)
        props.onAdd(newTask)
        setTask('')
    }

    return(
      <form onSubmit={submitHandler}>
        <input type="text" 
        className='create-task' 
        placeholder='Add a new item...' 
        value={task}
        onChange={changeHandler}>
        </input>
      </form>
    )
  }