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
  let badgeText
  if (props.openSpots === 0 ){
    badgeText = ("SOLD OUT")
  } else if (props.location === "Online"){
    badgeText = ("ONLINE") 
  }

  /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */

  return (
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
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

//{props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}