import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Nav = (props) => {

    const logged_out_nav = (
        <nav>
            <ul>
                <li className="login-btn" onClick={() => props.displayForm('login')}>login</li>
                <li className="signup-btn" onClick={() => props.displayForm('signup')}>signup</li>
                <li className="logo">curata <i className="fa fa-pushed"></i></li>
            </ul>
        </nav>
    )

    const logged_in_nav = (
        <nav>
            <ul>
                <li className="logout-btn" onClick={props.handleLogout}>logout</li>
                <li className="logo">cluster <i className="fa fa-pushed"></i></li>
            </ul>
        </nav>
    )
    return <>{props.logged_in ? logged_in_nav : logged_out_nav}</>
}

export default Nav;

Nav.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    displayForm: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
}