import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/user/Home/Home.jsx";
import Rooms from "./pages/user/Rooms/Rooms.jsx";
import Bookings from "./pages/user/Bookings/Bookings.jsx";
import Profile from "./pages/user/Profile/Profile.jsx";
import AdminPage from "./pages/admin/AdminPage.jsx";
import ManageRooms from "./pages/admin/ManageRooms/ManageRooms.jsx";
import Payment from "./pages/admin/Payments/Payment.jsx";
import Visitors from "./pages/admin/Visitors/Visitors.jsx";
import Setting from "./pages/admin/Setting/Setting.jsx";
import AdminDashboard from "./pages/admin/Dashboard/AdminDashboard.jsx";

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="profile" element={<Profile />} />
        </Route>,
        <Route path="/" element={<AdminPage />}>
            <Route path="admin" element={<AdminDashboard />} />{" "}
            <Route path="manageRooms" element={<ManageRooms />} />
            <Route path="payments" element={<Payment />} />
            <Route path="payments" element={<Payment />} />
            <Route path="visitors" element={<Visitors />} />
            <Route path="setting" element={<Setting />} />
        </Route>,
    ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
