import { Outlet ,Link } from "react-router-dom"
import React from "react"
import Lists from "./Lists"
import { ContextApi } from "../ContextApi"

export default function Navbar(){

    const lists = React.useContext(ContextApi);

    const [ collapse, setCollapse] = React.useState(true)

    function hamburgerNav(){
        setCollapse(state => !state)
    }


    return(
        <>
            <div className="header" onClick={hamburgerNav}>
                <i className="fa-solid fa-bars"></i>
            </div>
        <nav className={collapse? "displayNone" : null}>
            <span>TASK MANAGER</span>
            <ul>
                {lists.map(list => (
                    <Link to={"/lists/" + list.id} key={list.id}>
                        <Lists title={list.title}/>
                    </Link>
                ))}
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