
// function ListItem (items) {
//     return .join('')
// }

export default  function List (props) {
    const items = props.items
    
    if(items.length){
    
        const ListItems = items.map( item => 
        <div className="list">
            <input type="checkbox"></input>
            <span className="textarea">{item.task}</span>
            <div className="variants">
                <span>{item.priority}</span>
                <span className="color"></span>
                <p className="time">{item.time}</p>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    )
    return(
      <ul className='listItems'>{ListItems}</ul>
      ) }else{
        return(
            <p className="isNoItem">There are no items on your list.</p>
        )
        }          
  }
    

    
