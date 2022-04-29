import React from "react"
import vector from "../images/vector.png"



export default function Main(){
    return(
        <main>
            <div className = "container">
                <img src = {vector} alt = "vector" />
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
        </main>
    )
} 