import React from "react"

export default function Show(props){

    // function clickHandler(){
    //    const style = {
    //     props.hide  
    // }
    // }

    // onClick={clickHandler}

    return (
       <div className="list button"> 
        <p>Remaining Items: <span>{props.remaining}</span></p>
        <button  className="showItems" >Hide Completed</button>
       </div>
    )
}