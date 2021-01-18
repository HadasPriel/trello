import { Link } from 'react-router-dom'



export function AppHeader() {


    return (


        <header className="app-header flex space-between align-center">
            <nav>
                <Link to="/" ><button className="header-home">  </button></Link>
                <button className="header-board"> Boards </button>
                <span>
                    <label>
                        <input className="header-filter"></input>
                    </label>
                </span>
            </nav>
            <h3 className="header-logo">TASKX</h3>

            <nav className="navbar-links">
                <button className="header-about-us"> About Us</button>
                <button className="header-user"></button>

            </nav>
            {/* <button className="user-avatar">HS</button> */}

        </header>

    )
}

