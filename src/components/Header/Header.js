import React from 'react';
import '../../styles/header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/sirenlogo.png';


const Header = () => {

    var menu=(event)=>{
        console.log(event);
        document.querySelector(".navbar").classList.toggle("act");
        document.querySelector(".fa-bars").classList.toggle("fa-window-close");
    }
    return (
        <>
           <div className={"main-header"}>
                <div className={"header-img"}>
                    <img src={logo} className={"logo"} alt="The Siren" />
                    <i className="fas fa-bars" onClick={menu}></i>
                </div>
                <div className={"navbar"}>
                    <NavLink exact activeClassName="activeuse" to="/home">Home</NavLink>
                    <NavLink activeClassName="activeuse" to="/bollywood">Bollywood</NavLink> 
                    <NavLink activeClassName="activeuse" to="/technology">Technology</NavLink> 
                    <NavLink activeClassName="activeuse" to="/hollywood">Hollywood</NavLink> 
                    <NavLink activeClassName="activeuse" to="/fitness">Fitness</NavLink> 
                    <NavLink activeClassName="activeuse" to="/food">Food</NavLink> 
                </div>
           </div>
           <hr className={"hr-line"} />
        </>
    )
}

export default Header;