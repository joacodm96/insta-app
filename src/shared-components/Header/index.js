import React from "react"
import "./index.css"
import logo from "../../images/instagram-logo.png";
import searchIcon from "../../images/search-icon.png";
import  {Menu}  from "../Menu"

export const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <img className="logo" src={logo} alt="Instagram Logo"></img>
                <div className="search">
                    <img className="search-icon" src={searchIcon} alt="Search Icon"></img>
                    <span className="search-text">Search</span>
                </div>
                <Menu />
            </div>

        </div>

    )
}