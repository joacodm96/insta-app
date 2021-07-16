import React from "react";
import "./index.css"

export const ProfileIcon = (props) => {
    /* destructure profile icon, giving 3 properties */
    const { iconSize, storyBorder, image } = props;

    /* get random number*/
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /* set randomId */
    let randomId = getRandomInt(1, 70);

    /* If there is an image loaded, take the image, if not give me a random image */
    let profileImage = image ? image : `https:i.pravatar.cc/150?img=${randomId}`;
    return (
        <div className={storyBorder ? "storyBorder" : ""}>
            <img className={`profileIcon ${iconSize}`} src={profileImage} alt="profile"/>
        </div>
    )
}