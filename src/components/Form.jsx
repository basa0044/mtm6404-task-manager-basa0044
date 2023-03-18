import React from "react"

export default function Form(props){

    const [task, setTask] = React.useState('')
    const [time, setTime] = React.useState('')

    function formHandler (e){
        e.preventDefault()
        const newTask = { task: task, complete: false, time: time}
        console.log(newTask)
        props.onAdd(newTask)
        setTask('')
    }

    function changeHandler(e){
        setTask(e.target.value)
    }

    function timeHandler(e){
        setTime(e.target.value)
    }

 return (
    <form onSubmit={formHandler} className="list">
        <input className="textarea" type="text" placeholder="Create a new todo..." 
        value={task} onChange={changeHandler}/>
        <select  className="variants">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
        <input type="time" value={time} onChange={timeHandler}></input>
      </form>
 )
}
