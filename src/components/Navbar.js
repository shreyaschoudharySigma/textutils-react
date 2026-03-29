import React, { useState } from 'react';
import PropTypes from 'prop-types'

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    menu1: PropTypes.string,
    menu2: PropTypes.string,
    menu3: PropTypes.string
}
const KachdaMethod = (e) => {
    e.preventDefault();
}

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode? "success":"primary"}`} data-bs-theme={props.mode ? "light" : "dark"}>
            <a className="navbar-brand" href="/">
                <i className="bi-primary bi-file-earmark-word-fill"></i>
                <b>{props.title}</b>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav me-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">{props.menu1}</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.menu2}</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.menu3}</a>
                    </li>
                </ul>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" checked={!(props.mode)} onChange={props.toggleMode} id="flexSwitchCheckChecked"/>
                        <label className="form-check-label text-light"><i className="bi bi-moon-stars-fill me-2"></i></label>
                </div>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={KachdaMethod}>⌕</button>
                </form>
            </div>
        </nav>

    )
}

Navbar.defaultProps = {
    title: "TextUtils",
    menu1: "Menu1",
    menu2: "Menu2",
    menu3: "Menu3"
}