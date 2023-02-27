const Header = (props) => {
    return(
        <div className="header">
            <i>icon</i>
            <p>Welcome, Friend!</p>
        </div>
    )
}

const Navbar = (props) => {
    return(
        <nav>
            <span>TASK MANAGER</span>
            <ul>
                <li>House Chores</li>
                <li>Today</li>
                <li>Grocery List</li>
            </ul>
            <button><i>Icon</i>Add a Page</button>
        </nav>
    )
}

const Title = (props) => {
    return(
        <div className="title">
        <p>TODAY</p>
        <button><i>Icon</i>Add a To Do</button>
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

const ListItems = (props) => {
    return(
        <div className="listItems">
        <div className="list">
            <input type="checkbox"></input>
            <p className="textarea">Meeting with the Team</p>
            <div className="variants">
                <span><p>High</p></span>
                <p className="time">10.30</p>
                <i>Icon</i>
            </div>
        </div>
        <div className="list">
            <input type="checkbox"></input>
            <p className="textarea">Project Due</p>
            <div className="variants">
                <span><p>High</p></span>
                <p className="time">11.59</p>
                <i>Icon</i>
            </div>
        </div>
        <div className="list">
            <input type="checkbox"></input>
            <p className="textarea">Class</p>
            <div className="variants">
                <span><p>Medium</p></span>
                <p className="time">17.00</p>
                <i>Icon</i>
            </div>
        </div>
        <div className="list">
            <input type="checkbox"></input>
            <p className="textarea">Workout</p>
            <div className="variants">
                <span><p>Low</p></span>
                <p className="time">21.30</p>
                <i>Icon</i>
            </div>
        </div>
        <div className="list">
            <input type="checkbox"></input>
            <p className="textarea">Movie time with sister</p>
            <div className="variants">
                <span><p>Low</p></span>
                <p className="time">22.30</p>
                <i>Icon</i>
            </div>
        </div>
        </div>
    )
} 

const Footer = (props) => {
    return(
        <footer><p>© 2023 Feyza Basaran. All rights reserved.</p></footer>
    )
}



function App (){
    return(
        <React.Fragment>
        <Header/>
        <Navbar/>
        <Title/>
        <ListItems/>
        <Footer/>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)

