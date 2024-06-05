import React from "react";

function Card({ imageUrl, title, description }) {
    return (
        <div className="card my-3 mx-2">
            <img src={imageUrl} className="card-img-top" alt="Room" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary">Book Now</button>
            </div>
        </div>
    );
}

export default Card;
