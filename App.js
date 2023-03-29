import React from "react"
import Img from "./Img"
import Info from "./Info"
import Button from "./Button"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"



export default function App(){
    return(
        <div className="container">
                <Img />
                <div className="wrap">
                    <Info />
                    <Button />
                    <About />
                    <Interests />
                    <Footer />
                </div>
        </div>
    )
}