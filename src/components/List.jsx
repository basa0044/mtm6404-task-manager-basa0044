
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
        <p className="time">{item.time}</p>
        <i>Icon</i>
    </div>
   </div>)
    return(
      <ul className='listItems'>{ListItems}</ul>
      ) }else{
        return(
            <p className="isNoItem">There are no items on your list.</p>
        )
        }          
  }
    
        // {/* <div className="list">
        //     <input type="checkbox"></input>
        //     <p className="textarea">Project Due</p>
        //     <div className="variants">
        //         <span><p>High</p></span>
        //         <p className="time">11.59</p>
        //         <i>Icon</i>
        //     </div>
        // </div>
        // <div className="list">
        //     <input type="checkbox"></input>
        //     <p className="textarea">Class</p>
        //     <div className="variants">
        //         <span><p>Medium</p></span>
        //         <p className="time">17.00</p>
        //         <i>Icon</i>
        //     </div>
        // </div>
        // <div className="list">
        //     <input type="checkbox"></input>
        //     <p className="textarea">Workout</p>
        //     <div className="variants">
        //         <span><p>Low</p></span>
        //         <p className="time">21.30</p>
        //         <i>Icon</i>
        //     </div>
        // </div>
        // <div className="list">
        //     <input type="checkbox"></input>
        //     <p className="textarea">Movie time with sister</p>
        //     <div className="variants">
        //         <span><p>Low</p></span>
        //         <p className="time">22.30</p>
        //         <i>Icon</i>
        //     </div>
        // </div> */}
        // </div>
    
