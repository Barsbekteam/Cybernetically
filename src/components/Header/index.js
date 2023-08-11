import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className=" header">
            <NavLink to={'/'}>Pages</NavLink>
            <NavLink to={'/dnd'}>Beautiful DND</NavLink>
        </div>
    );
};

export default Header;