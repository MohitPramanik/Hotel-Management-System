import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const links = [
    { text: "Dashboard", path: "/admin" },
    { text: "Rooms", path: "/manageRooms" },
    { text: "Payments", path: "/payments" },
    { text: "Visitors", path: "/visitors" },
    { text: "Setting", path: "/setting" },
];

const adminName = "Mohit Kumar Pramanik";

const Sidebar = () => {
    return (
        <nav className="w-100" style={{ height: "100vh" }}>
            <div className="sidebar-sticky">
                <div className="text-center py-4">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
                        alt="Admin"
                        className="img-fluid rounded-circle"
                        style={{ height: "58px" }}
                    />
                    <h4 id="adminName">{adminName}</h4>
                </div>
                <ul
                    className="nav flex-column"
                    style={{ borderTop: "1px solid black" }}
                >
                    {links.map((link, index) => (
                        <li
                            className="nav-item"
                            style={{ borderBottom: "1px solid black" }}
                            key={index}
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    `${isActive && "admin-active-tab"} nav-link`
                                }
                                to={link.path}
                                activeClassName="active"
                                style={{
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                {link.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
