// RoomList.js
import React from "react";

const RoomList = ({ rooms, deleteRoom }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {rooms.map((room) => (
                    <tr key={room.id}>
                        <td>{room.name}</td>
                        <td>{room.description}</td>
                        <td>{room.price}</td>
                        <td>
                            <button onClick={() => deleteRoom(room.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RoomList;
