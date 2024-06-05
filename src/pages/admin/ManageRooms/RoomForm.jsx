// RoomForm.js
import React, { useState } from "react";

const RoomForm = ({ addOrEdit, room }) => {
    const initialFormState = {
        id: null,
        name: "",
        description: "",
        price: "",
    };

    const [roomData, setRoomData] = useState({ ...initialFormState });

    const handleInputChange = (event) => {
        setRoomData({ ...roomData, [event.target.name]: event.target.value });
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!roomData.id) {
                    addOrEdit(roomData);
                } else {
                    addOrEdit(roomData);
                }
                setRoomData({ ...initialFormState });
            }}
        >
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={roomData.name}
                onChange={handleInputChange}
            />

            <label>Description</label>
            <input
                type="text"
                name="description"
                value={roomData.description}
                onChange={handleInputChange}
            />

            <label>Price</label>
            <input
                type="text"
                name="price"
                value={roomData.price}
                onChange={handleInputChange}
            />

            <button type="submit">{room ? "Update" : "Add"}</button>
        </form>
    );
};

export default RoomForm;
