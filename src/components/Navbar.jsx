import { Outlet, NavLink ,Link } from "react-router-dom"
import React from "react"
import Lists from "./Lists"
import {collection, query, onSnapshot} from 'firebase/firestore'
import db from '../db'
import { ContextApi } from "../ContextApi"

export default function Navbar(){

    const lists = React.useContext(ContextApi);


    return(
        <>
        <nav>
            <span>TASK MANAGER</span>
            <ul>
                {lists.map(list => (
                    <Link to={"/lists/" + list.id} key={list.id} >
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