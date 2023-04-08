

function Title(){
    const $form = document.querySelector('.form')
    function onClickHandler(e){
        e.preventDefault()
        alert('button is clicked')
    }
    
    return(
        <div className="title">
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