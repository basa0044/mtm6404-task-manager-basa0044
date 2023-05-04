
export default function Show(props){

    function clickHandler(){
        props.onClickButton()
    }

    return (
       <div className="list button"> 
        <p>Remaining Items: <span>{props.remaining}</span></p>
        <button onClick={clickHandler} className="showItems" >{ props.toggleButton? "Show Completed" : "Hide Completed" }</button>
       </div>
    )
}