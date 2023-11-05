import React from 'react';
import PropTypes from 'prop-types';

// We created a component Navbar which we can use in app.js with other components
//it keeps our app.js file clean and simple

// props - props are the variables inside a component that we want to change with a custom value ourselves
// when we import that component in some other component,{props.variable name}
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" >{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.about}</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>

                    {/*ternary operator for light dark mode for navbar color change*/}
                    <div className={`form-check form-switch mx-3 text-${props.mode === 'light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// proptypes fix the type for the variable that we should use else it will display error on inspect->console

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}
