import React from "react"
import MobiusLogo from "../images/MobiusLogo.png"







export default function NavBar() {
    return( 
    <nav>
            <a className = "header" href = "https://discord.gg/vSSGgykq"><span>Discord</span></a>
            <a className = "header" href = " "><span>Whitepaper</span></a>
            <a href = " " ><img src= {MobiusLogo} alt = "mobius" className = "MobiusLogo" /></a>
            <a className = "header" href = " " ><span>Fundraiser</span></a>
            <a className = "header" href = "https://twitter.com/MobiusProtocol"><span>Twitter</span> </a>
    </nav>
    )
   
}