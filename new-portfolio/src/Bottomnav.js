import React, { Component } from 'react';
import {NavLink} from "react-router-dom"

class Bottomnavbar extends Component {

    render() {
        return (
            <>
            <div className="bottomnavbar">

                <NavLink className="bottomnavlink, spaceBottomLinks" exact={true} activeClassName='is-active' to='/'>Home</NavLink>
                <NavLink className="bottomnavlink, spaceBottomLinks" activeClassName='is-active' to='/projects'>Projects</NavLink>
                <NavLink className="bottomnavlink, spaceBottomLinks" activeClassName='is-active' to='/skills'>Skills</NavLink>
                <NavLink className="bottomnavlink, spaceBottomLinks" activeClassName='is-active' to='/contact'>Contact</NavLink>
            </div>
            </>
        );
    }
}

export default Bottomnavbar;