import React from "react"
import vector from "../images/vector.png"
import Info from "../images/info.png"
import paperIcon from "../images/paperIcon.png"
import Text from "../images/Text.png"


export default function Main(){
    return(
        <main>
            <div className = "container">
                <img className = "backGroundImage" src = {vector} alt = "vector" />
                <div className = "container--title">
                    <span className = "container--title--big">Crowdfunding</span>
                    <span className = "container--title--big"> Meets DeFi.</span>
                    <span className = "container--subtitle"><strong>Fund </strong>the future, and <strong>Earn</strong> for contributing</span>

                    <div className = "button">
                        <button className = "buttonleft">View Demo</button>
                        <button className = "buttonright">Read Docs</button>
                    </div>
                </div>
            </div>

            <div className = "boxLinks">
                <button className = "infoIcon"><img className ="infoIcon--Image" src = {Info} alt = "info logo"/>Read the Litepaper</button>
                <button className = "paperIcon" ><img className = "paperIcon--Image" src = {paperIcon} alt ="paperIcon"/>Read the One-Pager</button>
                <button className = "textIcon"><img className = "textIcon--Image"  src = {Text} alt = "textIcon" />Follow Our Socials</button>
            </div>

           
        </main>
    )
} 