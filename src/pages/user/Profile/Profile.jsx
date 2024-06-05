import React, { useRef, useState } from "react";
import { CiCamera } from "react-icons/ci";
import "./Profile.css";

function Profile() {
    const userName = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const address = useRef(null);
    const country = useRef(null);
    const state = useRef(null);
    const city = useRef(null);
    const pinCode = useRef(null);
    const profileImage = useRef(null);

    const [isEditing, setIsEditing] = useState(false);

    const [userDetail, setUserDetail] = useState({
        userName: "Username",
        email: "",
        phone: "",
        address: "",
        country: "",
        state: "",
        city: "",
        pinCode: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
    });

    const handleEditDetails = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setUserDetail({
            userName: userName.current.innerHTML,
            email: email.current.value,
            phone: phone.current.value,
            address: address.current.value,
            country: country.current.value,
            state: state.current.value,
            city: city.current.value,
            pinCode: pinCode.current.value,
        });
        setIsEditing(false);
    };

    return (
        <div
            id="profile"
            className="border border-2 border-dark rounded-3 w-75 m-auto overflow-hidden my-5"
        >
            <h2 className="text-center display-3 fw-bold bg-dark text-white p-3">
                Profile
            </h2>

            <form onSubmit={(e) => e.preventDefault()}>
                <div className="w-100 m-auto d-flex flex-lg-row flex-column gap-4 px-4 py-3">
                    {/* Image section */}
                    <div className="text-center position-relative">
                        <img
                            src={userDetail.image}
                            alt="Loading error"
                            className="rounded-pill"
                            ref={profileImage}
                        />
                        {isEditing && (
                            <label
                                htmlFor="take-profile-img"
                                className="camera-icon"
                            >
                                <CiCamera />
                            </label>
                        )}
                        <input
                            type="file"
                            id="take-profile-img"
                            accept="image/*"
                            capture
                            style={{ display: "none" }}
                        />
                    </div>

                    {/* User details section */}
                    <div className="w-100">
                        {/* username */}
                        <div>
                            <p
                                id="userNameText"
                                className={`ps-0 text-black bg-transparent fs-2 fw-medium w-max m-auto text-center border-0  ${
                                    isEditing && "border-bottom"
                                } border-black text-lg-start`}
                                contentEditable={isEditing}
                                suppressContentEditableWarning={true}
                                ref={userName}
                            >
                                {userDetail.userName}
                            </p>
                        </div>

                        {/* email  */}
                        <div className="d-flex flex-column gap-1 my-3 w-100 ">
                            <label htmlFor="email">Email : </label>
                            <input
                                type="email"
                                id="email"
                                className={`${
                                    isEditing && "input-edit-border"
                                }`}
                                disabled={!isEditing}
                                ref={email}
                            />
                        </div>

                        {/* phone  */}
                        <div className="d-flex flex-column gap-1 my-3 w-100">
                            <label htmlFor="phone">Phone : </label>
                            <input
                                type="number"
                                id="phone"
                                className={`${
                                    isEditing && "input-edit-border"
                                }`}
                                disabled={!isEditing}
                                ref={phone}
                            />
                        </div>

                        {/* address */}
                        <div className="d-flex flex-column gap-1 my-3 w-100">
                            <label htmlFor="address">Address : </label>
                            <textarea
                                id="address"
                                rows={5}
                                className={`${
                                    isEditing && "input-edit-border"
                                }`}
                                style={{
                                    resize: "none",
                                    color: "black",
                                    padding: "10px",
                                }}
                                disabled={!isEditing}
                                ref={address}
                            ></textarea>
                        </div>

                        {/* Single row for country and state */}
                        <div className="d-flex flex-wrap flex-sm-nowrap">
                            {/* country  */}
                            <div className="d-inline my-3 w-100">
                                <label htmlFor="country" className="me-3">
                                    Country :{" "}
                                </label>
                                <select
                                    id="country"
                                    className={`w-50 ${
                                        isEditing
                                            ? "input-edit-border"
                                            : "hide-dropdown"
                                    }`}
                                    disabled={!isEditing}
                                    ref={country}
                                >
                                    <option value="">--- select ---</option>
                                    <option value="India">India</option>
                                </select>
                            </div>

                            {/* state  */}
                            <div className="d-inline my-3 w-100">
                                <label htmlFor="State" className="me-3">
                                    State :{" "}
                                </label>
                                <select
                                    id="state"
                                    className={`w-50 ${
                                        isEditing
                                            ? "input-edit-border"
                                            : "hide-dropdown"
                                    }`}
                                    ref={state}
                                    disabled={!isEditing}
                                >
                                    <option value="">--- select ---</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                </select>
                            </div>
                        </div>
                        {/* Single row for city and pin code */}
                        <div className="d-flex flex-wrap flex-sm-nowrap">
                            {/* city */}
                            <div className="d-inline my-3 w-100">
                                <label htmlFor="city" className="me-3">
                                    City :{" "}
                                </label>
                                <select
                                    id="city"
                                    className={`w-50 ${
                                        isEditing
                                            ? "input-edit-border"
                                            : "hide-dropdown"
                                    }`}
                                    ref={city}
                                    disabled={!isEditing}
                                >
                                    <option value="">--- select ---</option>
                                    <option value="Ranchi">Ranchi</option>
                                </select>
                            </div>
                            {/* pin code */}
                            <div className="d-inline my-3 w-100">
                                <label htmlFor="pinCode" className="me-3">
                                    Pin Code :{" "}
                                </label>
                                <input
                                    type="number"
                                    id="pinCode"
                                    className={`w-50 ${
                                        isEditing && "input-edit-border"
                                    }`}
                                    ref={pinCode}
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit save button */}
                <div className="d-flex justify-content-center">
                    <button
                        className={`btn ${
                            isEditing ? "btn-success" : "btn-primary"
                        } mx-3 my-2`}
                        style={{ width: "97%" }}
                        onClick={isEditing ? handleSave : handleEditDetails}
                    >
                        {isEditing ? "Save" : "Edit"} details
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Profile;
