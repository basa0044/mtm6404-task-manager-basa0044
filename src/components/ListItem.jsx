
export default function ListItem(props){

    const item = props.item

    function changeHandler(){
        props.onUpdateItem(item)
    }

    return(
        <div key={item.id} className="list">
             <input type="checkbox" 
             checked={item.complete} 
             value=""
             onChange={changeHandler}>
             </input>
            <span className="textarea">{item.task}</span>
            <div className="variants">
                <span>{item.priority}</span>
                <span className="color"></span>
                <p className="time">{item.time}</p>
                <i className="fa-solid fa-trash"></i>
            </div>
       </div>
    )
}