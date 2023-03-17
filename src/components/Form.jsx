import React from "react"

export default function Form(){

    const [task, setTask] = React.useState('')

    function formHandler (e){
        e.preventDefault()

    }

    function textHandler(e){
        setTask(e.target.value)
        console.log(task)
    }

 return (
    <form onSubmit={formHandler}>
        <input type="text" placeholder="Create a new todo..." value={task} onChange={textHandler}/>
        <select>
            <option value="high">High</option>
            <option value="med">Medium</option>
            <option value="low">Low</option>
        </select>
        <input type="time"></input>
      </form>
 )
}
