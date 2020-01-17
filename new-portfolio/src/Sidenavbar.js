import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import {SocialIcon} from "react-social-icons"

class Sidenavbar extends Component {

    render() {
        return (
            <>
            <div className="sidenavbar">

                <NavLink className="sidenavlink" exact={true} activeClassName='is-active' to='/'>Home</NavLink>
                <NavLink className="sidenavlink" activeClassName='is-active' to='/projects'>Projects</NavLink>
                <NavLink className="sidenavlink" activeClassName='is-active' to='/skills'>Skills</NavLink>
                <NavLink className="sidenavlink" activeClassName='is-active' to='/contact'>Contact</NavLink>
                <div className="sidesocialDiv">
                    <SocialIcon className="social" style={{margin: 7.5}} target="_blank" url="https://www.linkedin.com/in/ibrahim-mohamed-/" network="linkedin" bgColor="black" fgColor="#ff9450"/>
                    <SocialIcon className="social" style={{margin: 7.5}} target="_blank" url="https://github.com/Ibrahim-Mohamed1" network="github" bgColor="black" fgColor="#ff9450"/>
                </div>
            </div>
            </>
        );
    }
}

export default Sidenavbar;