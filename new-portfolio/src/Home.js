import React from 'react';
import Sidenavbar from './Sidenavbar';
import Bottomnavbar from './Bottomnav';
import {Link} from 'react-router-dom'

function Home() {
    var styles = {
        introName:{
            textAlign: "center",
            fontSize: "5em",
            color: "gray",
            margin: '0'
        },
        introLine:{
            textAlign: "center",
            fontSize: "1.5em",
            color: "gray",
            marginTop: '0',
            marginBottom: '0',
        },
        button:{
            zoom: 2,
            display:"block",
            margin:"auto", 
            cursor:"pointer",
            outline:"none",
            borderRadius: 5,
            fontSize:".80em",
        }
    }
    return (
        <>
            <Sidenavbar/>
            <Bottomnavbar/>
            <div className="home">
                <h1 style={{...styles.introName, textAlign:"center"}}><p className="shake" style={{color:"#ff9450", padding:"1%", margin: 0, marginTop:".75em", display:"inline-block", cursor:"default"}}>Hi,</p></h1>
                <h1 style={{...styles.introName}}> I'm <span className="link" style={{cursor:"default"}}>Ibrahim Mohamed</span>.</h1>
                <h1 style={styles.introLine}>I'm a <p className="shake" style={{color: "#ff9450", display:"inline-block", paddingTop:"1%", paddingBottom:"1%", cursor:"default"}}>Full Stack Developer</p> based in <p className="shake" style={{color: "#ff9450", display:"inline-block", paddingBottom:"1%", paddingTop:"1%", cursor:"default"}}>Salt Lake City</p>, Utah.</h1>
                <Link to="/projects" style={{textDecoration:"none"}}><button className="button shake" style={{...styles.button}}>Projects</button></Link>
            </div>
        </>
    )
}

export default Home;