import React from "react"
import {Story} from "./Story"
import "./index.css"
import storiesData from "../../data/stories.json"

export const Stories = () => {
    
    const storiesArray = storiesData.map((storyData) => {
        return <Story account={storyData.account}/>
    })
    return (
        <div className="stories" >
            {storiesArray}
        </div>
    )

}