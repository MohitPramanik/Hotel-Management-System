import { useId, useState } from "react";

function FilterSideBar() {
    const [location, setLocation] = useState("");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [roomType, setRoomType] = useState("all");
    const [rating, setRating] = useState("all");

    const roomPricesFilters = [
        {
            id: "price1",
            text: "Up to Rs. 10000",
        },
        {
            id: "price2",
            text: "Rs. 10000 to Rs. 20000",
        },
        {
            id: "price3",
            text: "Rs. 20000 to Rs. 30000",
        },
        {
            id: "price4",
            text: "Rs. 30000 to Rs. 40000",
        },
        {
            id: "price5",
            text: "Above Rs. 50000",
        },
    ];

    const facilityList = [
        {
            id: "wifi",
            text: "Wi-Fi",
        },
        {
            id: "airConditioning",
            text: "Air Conditioning",
        },
        {
            id: "laundryService",
            text: "Laundry Service",
        },
        {
            id: "parking",
            text: "Parking",
        },
    ];

    const ratingOptions = ["All", 1, 2, 3, 4, 5];

    return (
        <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                    Filter
                </h5>
                {/* Close button */}
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>

            <div className="offcanvas-body d-flex flex-column gap-3">
                {/* Location filter  */}
                <div className="d-flex flex-wrap gap-3">
                    <label htmlFor="location" className="fw-medium">
                        Location
                    </label>
                    <select
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value="">--- select location ---</option>
                        <option value="ranchi">Ranchi</option>
                        <option value="bihar">Bihar</option>
                        <option value="palamu">Palamu</option>
                    </select>
                </div>

                {/* Date range filter */}
                <div className="d-flex gap-3 flex-column flex-sm-row">
                    <div className="d-flex flex-wrap gap-3">
                        <label htmlFor="check-in-date" className="fw-medium">
                            Check-in-date
                        </label>
                        <input
                            type="date"
                            id="check-in-date"
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                        />
                    </div>
                    <div className="d-flex flex-wrap gap-3">
                        <label htmlFor="check-out-date" className="fw-medium">
                            Check-out-date
                        </label>
                        <input
                            type="date"
                            id="check-out-date"
                            value={checkOutDate}
                            onChange={(e) => setCheckOutDate(e.target.value)}
                        />
                    </div>
                </div>

                {/* Price range filter */}
                <div>
                    <h6>Price</h6>
                    {roomPricesFilters.map((item) => (
                        <div key={item.id}>
                            <input type="checkbox" id={item.id} />
                            <label className="ms-3" htmlFor={item.id}>
                                {item.text}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Room Type filter*/}
                <div className="d-flex flex-wrap gap-3">
                    <label htmlFor="room-type" className="fw-semibold">
                        Room type
                    </label>
                    <select
                        id="room-type"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="suite">Suite</option>
                        <option value="familyRoom">Family Room</option>
                    </select>
                </div>

                {/* Facilities in room filter*/}
                <div>
                    <h6>Facilities</h6>
                    {facilityList.map((item) => (
                        <div>
                            <input type="checkbox" id={item.id} />
                            <label htmlFor={item.id} className="ms-3">
                                {item.text}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Rating filter */}
                <div className="d-flex gap-3 flex-wrap">
                    <label htmlFor="rating" className="fw-semibold">
                        Rating
                    </label>
                    <select
                        id="rating"
                        className="w-25"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        {ratingOptions.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FilterSideBar;
