export default function Navbar(){
    return(
        <nav>
            <span>TASK MANAGER</span>
            <ul>
                <li>House Chores</li>
                <li>Today</li>
                <li>Grocery List</li>
            </ul>
            <button><i className="fa-solid fa-plus"></i>Add a Page</button>
        </nav>
    )
}