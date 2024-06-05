import React from "react";
import "./LogForm.css";
import PasswordHideShowButton from "./PasswordHideShowButton";

function LoginPage({ togglePage }) {
    return (
        <>
            <h2 className="text-center display-5 fw-medium">Welcome</h2>
            <div className="w-100">
                <form className="w-100 d-flex flex-column gap-3">
                    {/* username  */}
                    <div className="input-area">
                        <input type="text" id="userName" placeholder="" />
                        <label htmlFor="userName">Username</label>
                    </div>
                    {/* password */}
                    <div className="input-area">
                        <input type="password" id="password" placeholder="" />
                        <label htmlFor="password">Password</label>
                        <PasswordHideShowButton />
                    </div>
                    {/* Remember me  */}
                    <div className="mt-2">
                        <input type="checkbox" id="rememberMe" />
                        <label
                            htmlFor="rememberMe"
                            className="ms-2"
                            style={{ cursor: "Pointer" }}
                        >
                            Remember me
                        </label>
                    </div>
                    <div className="text-center d-flex flex-column mt-3">
                        <button className="btn btn-primary px-5 py-2 link-text">
                            Login
                        </button>
                        <p className="text-primary mt-4 link-text">
                            Forgot Password ?{" "}
                        </p>
                        <p>
                            Don't have an account?{" "}
                            <span
                                className="text-primary link-text"
                                onClick={togglePage}
                            >
                                Sign up
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginPage;
