import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    /*
    Challenge: Fix our component! 😱
    */
    
    return (
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.coverImg} className="card--image" />
        <div className="card--stats">
          <img src="https://raw.githubusercontent.com/szaszfaijulia/react-airbnb/master/src/PngItem_1524402.png" className="card--star" />
          <span>{props.stats.rating}</span>
          <span className="gray">({props.stats.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
      </div>
    )
}