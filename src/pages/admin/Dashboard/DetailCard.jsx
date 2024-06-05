import React from "react";

function DetailCard({ data }) {
    return (
        <div
            className="border border-2 border-black rounded-2 m-3 px-4 py-2"
            style={{ width: "400px", height: "300px" }}
        >
            <h3 className="text-center fw-bold fs-2 p-2 border-bottom border-2 mb-4">
                {data.cardHeading}
            </h3>
            {data.cardData.map((item) => (
                <p key={item.dataName}>
                    {item.dataName} : {item.dataValue}
                </p>
            ))}
        </div>
    );
}

export default DetailCard;
