import { IoIosCheckmarkCircle } from "react-icons/io";
import { useId } from "react";
import "./RoomBox.css";

function RoomBox({ room }) {
    return (
        <div className="card mb-3 overflow-hidden ">
            <div className="row g-0">
                {/* Image area */}
                <div className="col-md-4">
                    <img
                        src={room.image}
                        className="h-100 w-100 object-fit-cover"
                    />
                </div>
                {/* Content area */}
                <div className="col-md-8 d-flex flex-column">
                    <div className="card-body">
                        <h5 className="card-title">{room.type}</h5>
                        <p className="card-text">{room.description}</p>
                        <div className="d-flex justify-content-start w-75 flex-wrap gap-3 room-facility-list">
                            {room.amenities.map((item) => (
                                <span
                                    key={useId()}
                                    className="d-flex gap-2 align-items-center mx-3"
                                >
                                    <IoIosCheckmarkCircle />
                                    {item}
                                </span>
                            ))}
                        </div>
                        <p className="card-text mt-4">
                            Location: {room.location}
                        </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-4 px-4 position-sticky bottom-0 w-100 py-3 bottom-tag">
                        <span className="text-muted fs-6">
                            Rs. {room.price} per night
                        </span>
                        <button
                            className="btn btn-primary px-4 py-2 book-btn"
                            style={{ fontSize: "19px" }}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomBox;
