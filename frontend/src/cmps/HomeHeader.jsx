// import { Link, NavLink } from 'react-router-dom'

import { Link } from "react-router-dom";



export function HomeHeader() {


    return (


        <header className="app-header flex space-between align-center">
            <nav>
                <button className="header-board"> Boards </button>
            </nav>

            <nav className="navbar-links">
                <button className="header-user"> Login</button>
                <Link to="/login"> Login</Link>
            </nav>
            {/* <button className="user-avatar">HS</button> */}

        </header>

    )
}

