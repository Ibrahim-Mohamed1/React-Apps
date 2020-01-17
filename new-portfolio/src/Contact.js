import React from 'react';
import Sidenavbar from './Sidenavbar';
import Bottomnavbar from './Bottomnav';

function Contact() {
    return (
        <>
            <Sidenavbar/>
            <Bottomnavbar/>
            <div className="contact">
                <h1 style={{color:'red'}}>stuff</h1>
            </div>
        </>
    )
}

export default Contact;