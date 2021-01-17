import { NavLink } from 'react-router-dom'



export function AppHeader() {


    return <nav className="app-header">
        <h3 className="logo-header">TASK<span>X</span></h3>
        
        <ul className="navbar-links">
            {/* <li><NavLink exact to="/">Home</NavLink> </li> */}
            {/* <li><NavLink to="/">Login</NavLink></li> */}
            {/* <li><NavLink to="/">Boards</NavLink> | </li> */}

        </ul>
        <button className="user-avatar">HS</button>

    </nav>;
}

