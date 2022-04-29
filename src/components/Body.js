import React from "react"
import Pig from "../images/pig.png"
import FlowerPot from "../images/flowerpot.png"
import MoneySigns from "../images/moneysigns.png"


export default function Body(){
    return(
       <div className = "bodyLinks">
           <div className = "linkContainers">

               <div className = "pig">
                   <img src = {Pig} alt = "pig" />
                   <button>Explore Fundraisers</button>
                   <p>Earn for contributing to disruptive protocols and public goods.</p>
               </div>

               <div className = "moneySigns">
                   <img src = {MoneySigns} alt = "moneysigns"/>
                   <button>View DAOs</button>
                   <p>Participate in the governance of projects you contribute to.</p>
               </div>

               <div className = "flowerPot">
                   <img src = {FlowerPot} alt = "flowerpot"/>
                   <button>Learn More</button>
                   <p>Grow your money, while contributing to causes with a variety of providers.</p>
               </div>




           </div>
       </div>
    )
}