function Title(){
    
    return(
        <div className="title">
        <p>TODAY</p>
        <button><i class="fa-solid fa-plus"></i>Add a To Do</button>
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