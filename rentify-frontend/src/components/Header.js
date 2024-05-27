import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/properties">Properties</Link>
        </nav>
    );
};

export default Header;