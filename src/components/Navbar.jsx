import { Outlet, NavLink ,Link } from "react-router-dom"
import React from "react"
import Lists from "./Lists"
import {collection, query, onSnapshot} from 'firebase/firestore'
import db from '../db'

export default function Navbar(){
5
    const[lists, setList] = React.useState([])

    React.useEffect(() => {
        const c = collection(db, 'lists')
        const q = query(c)
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = []
            snapshot.forEach(doc => data.push({
                id: doc.id,
                task: doc.data().task,
                title: doc.data().title
            }))
            setList(data)
        })
    },[])

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