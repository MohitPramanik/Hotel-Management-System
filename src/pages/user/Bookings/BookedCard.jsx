import "./BookedCard.css";
function BookedCard({ room }) {
    return (
        <div className="card mb-3 rounded-4 overflow-hidden w-100">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src="https://www.seleqtionshotels.com/content/dam/seleqtions/Connaugth/TCPD_PremiumBedroom4_1235.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
                        className="img-fluid rounded-4 w-100 h-100 object-fit-cover"
                        alt="Room img"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-between h-100">
                        <div>
                            <p>
                                <b>Type :</b> {room.type}
                            </p>
                            <p>
                                <b>Booking Slot :</b>{" "}
                                {room.bookingSlotStartDate} to{" "}
                                {room.bookingSlotEndDate}
                            </p>
                            <p>
                                <b>Price :</b> Rs. {room.price} per night
                            </p>
                            <p>
                                <b>Facilities :</b> {room.amenities.join(", ")}
                            </p>
                        </div>
                        <div className="d-flex flex-column flex-sm-row justify-content-between flex-wrap">
                            <p
                                className="px-3 py-2 rounded-pill"
                                style={{
                                    backgroundColor:
                                        room.bookingStatus === "Confirmed"
                                            ? "#23ffce"
                                            : "#ffe54d",
                                }}
                            >
                                <b>Booking Status :</b>{" "}
                                <span
                                    className={`${
                                        room.bookingStatus === "Confirmed"
                                            ? "text-success"
                                            : "text-danger"
                                    } fw-medium`}
                                >
                                    {room.bookingStatus}
                                </span>
                            </p>
                            <p>
                                <button
                                    className={`btn ${
                                        room.bookingStatus === "Confirmed"
                                            ? "btn-warning"
                                            : "btn-success"
                                    } booking-section-btn`}
                                >
                                    {room.bookingStatus === "Confirmed"
                                        ? "Cancel Booking"
                                        : "Book Again"}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookedCard;
