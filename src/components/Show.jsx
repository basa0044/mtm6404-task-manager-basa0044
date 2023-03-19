import React from "react"

export default function Show(props){

    const item = props.item

    function clickHandler(){
        props.onClickButton()
    }

    return (
       <div className="list button"> 
        <p>Remaining Items: <span>{props.remaining}</span></p>
        <button onClick={clickHandler} className="showItems" >Hide Completed</button>
       </div>
    )
}