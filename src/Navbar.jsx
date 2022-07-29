import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? '500' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',
        }
    }

    return (
        <>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">
                                    Black Technology
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0 menu">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" style={navLinkStyle} to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" style={navLinkStyle} to="/service">Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" style={navLinkStyle} to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" style={navLinkStyle} to="/Contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;