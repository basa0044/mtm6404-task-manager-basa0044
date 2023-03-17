import React from "react"

export default  function List (props) {

    const items = props.items.map((item, id) => ({...item, id}))

    if(items.length){
        const ListItems = items.map( item => 
        <div key={item.id} className="list">
            <input type="checkbox" checked={item.complete}></input>
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
      {ListItems}
      </ul>
      ) }else{
        return(
            <p className="isNoItem">There are no items on your list.</p>
        )
        }          
  }
    

    
