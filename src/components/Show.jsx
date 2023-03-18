export default function Show(props){
    return (
       <div className="list button"> 
        <p>Remaining Items: <span>{props.remaining}</span></p>
        <button className="showItems">Hide Completed</button>
       </div>
    )
}