import React from "react"

export default function Button(){
    return(
            <div className="button-wrapper">
                <button className="Email-btn"><i class="fa-solid fa-envelope"></i>Email</button>
                <button className="Linkedin-btn"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>
    )
}