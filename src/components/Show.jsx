import React from "react"

export default function Show(props){

    const [toggleButton, setToggleButton] = React.useState(false)

    function clickHandler(){
        props.onClickButton()
        setToggleButton(state => !state)
    }

    return (
       <div className="list button"> 
        <p>Remaining Items: <span>{props.remaining}</span></p>
        <button onClick={clickHandler} className="showItems" >{ toggleButton? "Show Remaining" : "Hide Remaining" }</button>
       </div>
    )
}