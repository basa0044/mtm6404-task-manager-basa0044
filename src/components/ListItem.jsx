import React from "react";
import { ContextApi } from "../ContextApi"


export default function ListItem(props){

    const item = props.item
    const button = props.toggleButton

    function changeHandler(){

        props.onUpdateItem(item)
    }

    function clickHandler(){
        props.onDeleteItem(item)
    }

    if(button){
        if(!item.complete){
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
    )}else{
        
    }
}else if(!button){
    return(
        <div className="list">
             <input type="checkbox" 
             checked={item.complete} 
             value=""
             onChange={changeHandler}>
             </input>
            <span className="textarea">{item.task}</span>
            <div className="variants">
                <span className={ item.priority === 'Urgent' ? 'urgent' : item.priority === 'Medium' ? 'medium' : 'low'}
                >{item.priority}</span>
                <span className={ item.priority === 'Urgent' ? 'urg color' : item.priority === 'Medium' ? 'med color' : 'lo color'}></span>
                <p className="time">{item.time}</p>
                <i onClick={clickHandler} className="fa-solid fa-trash"></i>
            </div>
       </div>
    )
}
}