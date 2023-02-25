const Header = (props) => {
    return(
        <div>
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
        <div>
        <p>Title of the Page goes Here</p>
        <button><i>Icon</i>Add a To Do</button>
        <ul>
            <li>Complete</li>
            <li>Item</li>
            <li>Priority</li>
            <li>Time</li>
            <li>Delete</li>
        </ul>
        </div>
    )
}

const ListItems = (props) => {
    return(
        <div>
            <span>icon</span>
            <p>Meeting with the Team</p>
            <span>High</span>
            <p>10.30</p>
            <i>Icon</i>
        </div>
    )
} 

const Footer = (props) => {
    return(
        <div><p>© 2023 Feyza Basaran. All rights reserved.</p></div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.Fragment>
    <Header/>
    <Navbar/>
    <Title/>
    <ListItems/>
    <Footer/>
    </React.Fragment>
)