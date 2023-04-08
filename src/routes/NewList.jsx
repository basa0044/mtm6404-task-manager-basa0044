import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import React from "react";

export default function NewList(props){

    const pages = props.pages

    const[list, setList] = React.useState(
        {
            title: ''
        }
    )

    function submitHandler(e){
        e.preventDefault()
        props.handleTitle()
    }

    function changeHandler(e){
        setList({
            title: e.target.value
        })
    }
    

    return(
        <>
        <NavBar/>
        <div className="newForm">
        <form onSubmit={submitHandler} className="newPageForm">
            <h1 className="mb-3">New Page</h1>
            <label htmlFor="name">Title</label>
            <input id="name" type="text" className="form-control" value={list.title} onChange={changeHandler}></input>
            <div className="mt-3 buttons--container">
            <Link className="btn btn-dark btn--cancel" to="/">Cancel</Link>
            <button className="btn btn-primary btn--save" type="submit">Save</button>
            </div>
        </form>
        </div>
        </>
    )
}