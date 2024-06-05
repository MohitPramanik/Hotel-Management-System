// src/components/Layout.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
    return (
        <div className="d-flex min-vh-100">
            <div className="position-relative" style={{ width: "600px" }}>
                <div
                    className="position-sticky top-0 bottom-0 w-100"
                    style={{ background: "#7474ff" }}
                >
                    <Sidebar />
                </div>
            </div>
            <div className="w-100">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminPage;
