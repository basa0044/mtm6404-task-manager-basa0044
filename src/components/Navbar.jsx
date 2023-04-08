import { Outlet, NavLink ,Link } from "react-router-dom"
import React from "react"

export default function Navbar(){


    return(
        <>
        <nav>
            <span>TASK MANAGER</span>
            <ul>
                <li>
                <NavLink to="/" className={isActive => isActive? 'nav-link active' : 'nav-link'}>To Do List</NavLink>
                </li>
            </ul>
            <Link to='/NewList'>
            <button  className="btn btn-light">
                <i className="fa-solid fa-plus"></i>Add a Page
            </button> 
            </Link>
        </nav>
        <div>
            <Outlet/>
        </div>
        </>
    )
}