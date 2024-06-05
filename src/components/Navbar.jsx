import { NavLink } from "react-router-dom";
import { GoSun } from "react-icons/go";
import { IoMoon } from "react-icons/io5";
import "./Navbar.css";
import { useState } from "react";
import { useId } from "react";

function Navbar({ logOut }) {
    const [isDark, setIsDark] = useState(false);

    const navlinks = [
        {
            path: "",
            text: "Home",
        },
        {
            path: "rooms",
            text: "Rooms",
        },
        {
            path: "bookings",
            text: "My Bookings",
        },
        {
            path: "profile",
            text: "Profile",
        },
    ];

    const profileImage =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s";

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <span className="navbar-brand" href="#">
                    Royal Rooms
                </span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    {/* ----------------------- Collapse area start ---------------------------------- */}
                    {/* Nav links  */}
                    <div className="d-flex w-100 justify-content-between flex-column flex-lg-row align-items-center ">
                        <div className="navbar-nav w-100">
                            {navlinks.map((item) => (
                                <NavLink
                                    key={item.path}
                                    className={({ isActive }) =>
                                        `${
                                            isActive
                                                ? "text-primary fw-medium"
                                                : "text-black"
                                        } nav-link text-center ${
                                            item.path === "profile" &&
                                            "d-lg-none nav-link"
                                        }`
                                    }
                                    to={item.path}
                                >
                                    {item.text}
                                </NavLink>
                            ))}
                        </div>
                        {/* Log out and profile buttons */}
                        <div className="d-flex justify-content-end align-item-center w-100 gap-4 pe-2">
                            <button
                                className="btn btn-danger text-white w-100 log-out-btn"
                                onClick={logOut}
                            >
                                Log out
                            </button>
                            <NavLink
                                to="profile"
                                className="bg-secondary-subtle d-none d-lg-flex justify-content-center rounded-pill border-0 overflow-hidden"
                                style={{ height: "50px", width: "50px" }}
                            >
                                <img
                                    src={profileImage}
                                    alt=""
                                    style={{ height: "60px", width: "60px" }}
                                    className="object-fit-cover"
                                />
                            </NavLink>
                        </div>
                    </div>
                    {/* ----------------------- Collapse area end ---------------------------------- */}
                </div>
            </div>
            <button
                className="fs-5 d-flex align-items-center border-0 position-absolute bg-transparent"
                id="theme-changer"
                onClick={() => setIsDark((prev) => !prev)}
            >
                {isDark ? <IoMoon /> : <GoSun />}
            </button>
        </nav>
    );
}

export default Navbar;
