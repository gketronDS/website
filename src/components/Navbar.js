import { Button } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import {Link, useLocation} from "react-router-dom"
import "../styles/Navbar.css"
import RecorderIcon from '@material-ui/icons/Reorder'

function Navbar() {
    
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            <button 
            onClick={() => {
                setExpandNavbar((prev) => !prev)
                }}
            >
                <RecorderIcon /> 
            </button>
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/resume"> Resume </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/research"> Research </Link>
        </div>
    </div>
  )
}

export default Navbar