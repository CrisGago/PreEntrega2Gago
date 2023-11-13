import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";


const NavBar = () => {

    const enlaces = [
        "Inicio",
        "Obras",
        "Presupuesta",
        // categorias
        "Mono",
        "Barbacoa",
        "Duplex",
        "Big"
    ]

    return (
        <div className='nav'>
            <Link className="enlace" to={"/"}>
                <p>LOGO</p>
            </Link>
            
            <ul className='enlacesContainer'>
                {enlaces.map((e,id) => 
                    <li  className="liContainer" key={id}>
                        <NavLink activeClassName="active" to={`${e}`}>
                         {e}
                        </NavLink>
                    </li>
                )}
              
            </ul>
        </div>
    );
};
export default NavBar