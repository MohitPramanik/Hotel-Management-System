// ManageRoom.js
import React, { useState, useEffect } from "react";
import RoomForm from "./RoomForm";
import RoomList from "./RoomList";

const ManageRoom = () => {
    const [rooms, setRooms] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentRoom, setCurrentRoom] = useState({});

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = () => {
        // Fetch rooms from your API
    };

    const addOrEdit = (room) => {
        if (editing) {
            // Update room in your API
        } else {
            // Add room to your API
        }
    };

    const deleteRoom = (id) => {
        // Delete room from your API
    };

    return (
        <div>
            <h2>Manage Rooms</h2>
            <RoomForm addOrEdit={addOrEdit} room={currentRoom} />
            <RoomList rooms={rooms} deleteRoom={deleteRoom} />
        </div>
    );
};

export default ManageRoom;
