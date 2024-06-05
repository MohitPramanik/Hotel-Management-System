// src/components/AdminDashboard.js

import React from "react";
import DetailCard from "./DetailCard";

function AdminDashboard() {
    const roomData = {
        cardHeading: "Rooms",
        cardData: [
            { dataName: "Deluxe", dataValue: 25 },
            { dataName: "Single Bed", dataValue: 20 },
            { dataName: "Double Bed", dataValue: 30 },
            { dataName: "Luxury", dataValue: 40 },
        ],
    };

    const staffData = {
        cardHeading: "Staffs",
        cardData: [
            { dataName: "In Kitchen", dataValue: 10 },
            { dataName: "For Serving", dataValue: 16 },
            { dataName: "Cleaning Duty", dataValue: 15 },
        ],
    };

    const bills = {
        cardHeading: "Bills",
        cardData: [
            { dataName: "Electricity", dataValue: "Rs. 5,000" },
            { dataName: "Staff salary", dataValue: "Rs. 50,000" },
            { dataName: "Maintenance Charge", dataValue: "Rs. 3,00,000" },
        ],
    };

    const visitors = {
        cardHeading: "Visitors",
        cardData: [
            { dataName: "January to March", dataValue: "1300" },
            { dataName: "April to June", dataValue: "1800" },
            { dataName: "July to September", dataValue: "1200" },
            { dataName: "October to December", dataValue: "4000" },
        ],
    };

    return (
        <div className="w-100 min-vh-100">
            <h2 className="text-center w-100 bg-primary text-white p-3">
                Hotel Details
            </h2>
            <div className="d-flex flex-wrap justify-content-center">
                <DetailCard data={roomData} />
                <DetailCard data={staffData} />
                <DetailCard data={bills} />
                <DetailCard data={visitors} />
            </div>
        </div>
    );
}

export default AdminDashboard;
