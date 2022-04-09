/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
import React from "react"

export default function Card(props) {
  return (
      <div className="card">
        <img src={props.img} className="card--image"/>
        <div className="card--stats">
          <img src="https://raw.githubusercontent.com/szaszfaijulia/react-airbnb/master/src/PngItem_1524402.png" className="card--star"/>
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
      </div>
  )
}

//src={`../images/${props.img}`}
//console.log(props)