import React from "react";

export default function Card(props) {
    return (
        <div className="card">
                <img src={`../images/${props.item.imageUrl}`} alt={props.item.title} className="card_img" />
                <div className="card_dsc">
                    <div className="card_location">
                        <img src="../images/location.png" alt="location icon" className="location_icon" />
                        <p className="location_name">{props.item.location}</p>
                        <a href={props.item.googleMapsUrl} className="location_link">View on Google Maps</a>
                    </div>
                    <h3 className="card_title">{props.item.title}</h3>
                    <p className="startDate">
                        {props.item.startDate}
                        <span className="endDate">{props.item.endDate}</span>
                    </p>
                    <p className="desc">{props.item.description}</p>
                </div>
        </div>
    )
}
