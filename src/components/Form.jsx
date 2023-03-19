import React from "react"

export default function Form(props){

    const [task, setTask] = React.useState('')
    const [time, setTime] = React.useState('')
    const [priority, setPriority] = React.useState('')
    const [color, setColor] = React.useState('')

    function formHandler (e){
        e.preventDefault()
        const newTask = { task: task, complete: false, time: time, priority:priority}
        props.onAdd(newTask)
        setTask('')
    }

    function changeHandler(e){
        setTask(e.target.value)
    }

    function timeHandler(e){
        setTime(e.target.value)
    }

    function priorityHandler(e){
        setPriority(e.target.value)
    }


 return (
    <form onSubmit={formHandler} className="list">
        <input className="textarea" type="text" placeholder="Create a new todo..." 
        value={task} onChange={changeHandler}/>
        <select  onChange={priorityHandler} className="variants">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low" >Low</option>
        </select>
        <input type="time" value={time} onChange={timeHandler}></input>
      </form>
 )
}
