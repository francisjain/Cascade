import React from 'react'
import { Link } from 'react-router-dom'

function index() {
    return (
        <div style={{ width:"40vw" ,margin: "auto",marginTop:"100px", backgroundColor: "white", padding: "20px 20px", borderRadius: "10px",boxShadow:"2px 2px gray"}}>
            <h1 style={{color:"gray"}}>Routing Pages</h1>
            <a href='/withselectoption'>CheckBox with Select Option</a><br /><br />
            <Link to='/withoutselectoption'>CheckBox without Select Option</Link>
        </div>
    )
}

export default index