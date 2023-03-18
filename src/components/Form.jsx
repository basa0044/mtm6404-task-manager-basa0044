import React from "react"

export default function Form(props){

    const [task, setTask] = React.useState('')

    function formHandler (e){
        e.preventDefault()
        const newTask = { task: task, complete: false}
        props.onAdd(newTask)
        setTask('')
    }

    function textHandler(e){
        setTask(e.target.value)
    }

 return (
    <form onSubmit={formHandler} className="list">
        <input className="textarea" type="text" placeholder="Create a new todo..." value={task} onChange={textHandler}/>
        <select className="variants">
            <option value="high">High</option>
            <option value="med">Medium</option>
            <option value="low">Low</option>
        </select>
      </form>
 )
}
