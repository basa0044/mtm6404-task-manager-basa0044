import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";

export default function NewList(){

    function submitHandler(e){
        e.preventDefault()
    }

    return(
        <>
        <NavBar/>
        <form onSubmit={submitHandler} className="p-5 bg-light border border-1 mb-3 newPageForm">
            <h1 className="mb-3">New Page</h1>
            <label htmlFor="name">Title</label>
            <input id="name" type="text" className="form-control"></input>
            <div className="mt-3 buttons--container">
            <Link className="btn btn-dark btn--cancel" to="/">Cancel</Link>
            <button className="btn btn-primary btn--save" type="submit">Save</button>
            </div>
        </form>
        </>
    )
}