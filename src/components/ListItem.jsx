
export default function ListItem(props){

    const item = props.item

    function changeHandler(){
        props.onUpdateItem(item)
    }

    function clickHandler(){
        props.onDeleteItem(item)
    }

    const className = `btn-${props.variant}`

    return(
        <div key={item.id} className="list">
             <input type="checkbox" 
             checked={item.complete} 
             value=""
             onChange={changeHandler}>
             </input>
            <span className="textarea">{item.task}</span>
            <div className="variants">
                <span className={className}>{item.priority}</span>
                <span className="color"></span>
                <p className="time">{item.time}</p>
                <i onClick={clickHandler} className="fa-solid fa-trash"></i>
            </div>
       </div>
    )
}