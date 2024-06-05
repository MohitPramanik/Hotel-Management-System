import React, { useState } from "react";
import FilterSideBar from "./FilterSideBar.jsx";
import RoomBox from "./RoomBox";
import { IoIosArrowUp } from "react-icons/io";
import roomData from "./room.js";

function Rooms() {
    const [visible, setVisible] = useState(false);
    const [rooms, setRooms] = useState(roomData);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 150) {
            setVisible(true);
        } else if (scrolled <= 150) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <div className="px-5">
            <button
                className="btn btn-dark w-100 my-5"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
            >
                Sort by filter
            </button>

            <FilterSideBar />

            <div className="d-flex flex-column-reverse justify-content-center align-items-center gap-5"></div>
            {rooms.map((room) => (
                <RoomBox key={room.id} room={room} />
            ))}
            <span
                className="position-fixed border border-1 border-black d-flex justify-content-center align-items-center bg-white bottom-0 end-0 m-lg-5 m-3 m-sm-4 rounded-pill"
                role="button"
                style={{
                    maxHeight: "60px",
                    maxWidth: "60px",
                    height: "20vw",
                    width: "20vw",
                    scale: visible ? "1" : "0",
                    transition: "scale 0.3s ease-in",
                }}
                onClick={() => scrollToTop()}
            >
                <IoIosArrowUp className=" fs-5 fw-bolder" />
            </span>
        </div>
    );
}

export default Rooms;
