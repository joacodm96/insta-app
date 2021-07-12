import React from "react"
import { ReactComponent as Home } from "../../images/home-icon.svg"
import { ReactComponent as Inbox } from "../../images/inbox-icon.svg"
import { ReactComponent as Explore } from "../../images/explore-icon.svg"
import { ReactComponent as Notifications } from "../../images/notifications-icon.svg"
import { ProfileIcon } from "../ProfileIcon/index"
import image from "../../images/profile-icon.jpg"
import "./index.css"



export const Menu = () => {
    return (
        <div className="menu">
            <Home className="icon" />
            <Inbox className="icon" />
            <Explore className="icon" />
            <Notifications className="icon" />
            <ProfileIcon iconSize="small"image={image} storyBorder={true}/>


        </div>
    )
}