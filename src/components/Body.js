import React from "react";

export default function Body(props) {
  return (
    <div className="card">
      <img src={`../images/${props.item.imageUrl}`} />
      <div className="right-side">
        <div className="location">
          <img src="../images/marker.png" />
          <h4 className="country">{props.item.location}</h4>
          <h4 className="view">
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </h4>
        </div>
        <h1>{props.item.title}</h1>
        <h4 className="date hr">
          {`${props.item.startDate} - ${props.item.endDate}`}
        </h4>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
