import React from 'react'
import {Link} from 'react-router-dom'
// import bootstrap from 'bootstrap'

import '../css/header.css'

const Header = () => {
    return ( 
        <header>
            <nav>
                
            </nav>

            <div className="container">
                <h3> <i className="material-icons">email</i> - soporte.campusvirtual@utepsa.edu</h3>
                <div className="container-login" id="login">
                    <Link to="/ingresar" className="nav-link active" href="#"> <i className="material-icons">person</i></Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;