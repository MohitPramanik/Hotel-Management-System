import React, { useEffect, useState } from "react";
import BookedCard from "./BookedCard";
import "./BookingData";
import bookingData from "./BookingData";

function Bookings() {
    const [rooms, setRooms] = useState(bookingData);
    const [filterValue, setFilterValue] = useState("all");

    const filterRooms = () => {
        if (filterValue === "all") {
            return bookingData;
        } else if (filterValue === "booked") {
            return bookingData.filter(
                (item) => item.bookingStatus === "Confirmed"
            );
        } else {
            return bookingData.filter(
                (item) => item.bookingStatus === "Cancelled"
            );
        }
    };

    useEffect(() => {
        setRooms(() => filterRooms());
    }, [filterValue]);

    return (
        <div className="min-vh-100 d-flex flex-column gap-3 p-5 align-items-center">
            {/* Filter button */}
            <div className="border border-2 border-secondary-subtle w-100 text-center p-2 rounded-4">
                <span>Filter : </span>
                <select
                    className="p-2"
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="booked">Current Bookings</option>
                    <option value="cancelled">Cancelled</option>
                </select>
            </div>
            {rooms.map((room) => (
                <BookedCard key={room.id} room={room} />
            ))}
        </div>
    );
}

export default Bookings;
