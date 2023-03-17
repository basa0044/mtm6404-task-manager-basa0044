import React from "react"

export default  function List (props) {
    const [task, setTask] = React.useState('')

    function formHandler (e){
        e.preventDefault()

    }

    function textHandler(e){
        setTask(e.target.value)
        console.log(task)
    }

    const items = props.items
    if(items.length){
        const ListItems = items.map( item => 
        <div key={item.index} className="list">
            <input type="checkbox"></input>
            <span className="textarea">{item.task}</span>
            <div className="variants">
                <span>{item.priority}</span>
                <span className="color"></span>
                <p className="time">{item.time}</p>
                <i className="fa-solid fa-trash"></i>
            </div>
        </div>
    )
    return(
      <ul className='listItems'>
      <form onSubmit={formHandler}>
        <input type="text" value={task} onChange={textHandler}/>
        <select>
            <option value="high">High</option>
            <option value="med">Medium</option>
            <option value="low">Low</option>
        </select>
      </form>
      {ListItems}
      </ul>
      ) }else{
        return(
            <p className="isNoItem">There are no items on your list.</p>
        )
        }          
  }
    

    
