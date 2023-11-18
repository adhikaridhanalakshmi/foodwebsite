import { Component } from "react";
import "../components/Navbarstyle.css"
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import navbarlogo from "../assests/logo.png"

class Navbar extends Component{
    state ={clicked:false};
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <div className="Navbar-logo">
                    <img alt="navbarlogo" src={navbarlogo} width="130px"/>
                </div>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}>
                {MenuItems.map((item,index)=>{
                    return(
                    <li key={index}>
                        <Link className={item.cName} to={item.Url}>
                        <i className={item.icon}></i>
                        {item.title}
                        </Link>
                    </li>
                    );
                })}
                </ul>
            </nav>
        );
    }

}
export default Navbar;