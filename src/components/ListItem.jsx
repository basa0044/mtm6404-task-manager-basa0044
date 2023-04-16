import React from "react";
import { ContextApi } from "../ContextApi"


export default function ListItem(props){

    const lists = React.useContext(ContextApi);
    console.log(lists)

    const item = props.item

    function changeHandler(){

        props.onUpdateItem(item)
    }

    function clickHandler(){
        props.onDeleteItem(item)
    }

    return(
        <div className="list">
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
                <i onClick={clickHandler} className="fa-solid fa-trash"></i>
            </div>
       </div>
    )
}