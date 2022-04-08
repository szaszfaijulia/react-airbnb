import React from "react"
import './style.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {4
    //<Hero />
    return (
        <div>
            <Navbar />
            <Card />
        </div>
    )
}