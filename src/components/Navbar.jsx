import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <span>TASK MANAGER</span>
            <ul>
                <li>
                <Link to="/">Today</Link>
                </li>
                <li>
                <Link to="/New">New Page</Link>
                </li>
            </ul>
            <button><i className="fa-solid fa-plus"></i>Add a Page</button>
        </nav>
    )
}