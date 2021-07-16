import React from "react"
import "./index.css"
import { ProfileIcon } from "../../ProfileIcon"



export const Story = (props) => {

    

    return (
        <div className="story">
            <ProfileIcon iconSize="big" storyBorder={true}/>
            <div className="accounts">{props.account}</div>



        </div>
    )

}