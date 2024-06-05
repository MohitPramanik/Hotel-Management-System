import { useState } from "react";
import LoginBg from "../../../assets/LoginBg.mp4";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function LoginSignUp() {
    const [isLoginPage, setIsLoginPage] = useState(true);

    const [showPassword, setShowPassword] = useState(false);

    const togglePage = () => {
        setIsLoginPage((prev) => !prev);
    };

    const toggle = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="min-vh-100 min-vw-100 overflow-hidden d-flex">
            {/* Hotel name section */}
            <div className="w-100 position-relative">
                <video
                    src={LoginBg}
                    className="w-100 h-100 object-fit-cover"
                    autoPlay
                    muted
                    loop
                ></video>
                <div className="position-absolute h-100 w-100 top-0 d-flex flex-column text-center text-white justify-content-center align-content-center">
                    <h1 className="display-2 fw-bold">Royal Rooms</h1>
                    <p className="fw-medium fs-4">Book your room today.</p>
                </div>
            </div>
            {/* Form section */}
            <div className="w-100 px-5 d-flex flex-column justify-content-center align-items-center">
                {isLoginPage ? (
                    <LoginPage togglePage={togglePage} />
                ) : (
                    <RegisterPage togglePage={togglePage} />
                )}
            </div>
        </div>
    );
}

export default LoginSignUp;
