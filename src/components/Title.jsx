import NewItem from "./NewItem"

function Title(){


  function onAddHandler(item){
    setList([...list, item])
}


    return(
        <div className="title">
        <p>TODAY</p>
        <button><NewItem onAdd={onAddHandler}/><i>Icon</i>Add a To Do</button>
        <div>
            <div className="complete"><p>Complete</p></div>
            <div className="item"><p>Item</p></div>
            <div className="titles">
                <p>Priority</p>
                <p>Time</p>
                <p>Delete</p>
            </div>
        </div>
        </div>
        )
}

export default Title