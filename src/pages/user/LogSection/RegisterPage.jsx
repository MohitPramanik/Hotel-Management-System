import React from "react";
import "./LogForm.css";
import PasswordHideShowButton from "./PasswordHideShowButton";

function RegisterPage({ togglePage }) {
    return (
        <>
            <h2 className="text-center display-5 fw-medium">Register</h2>
            <div className="w-100">
                <form className="w-100 d-flex flex-column gap-3">
                    {/* username  */}
                    <div className="input-area">
                        <input type="text" id="userName" placeholder="" />
                        <label htmlFor="userName">Username</label>
                    </div>
                    {/* email  */}
                    <div className="input-area">
                        <input type="email" id="email" placeholder="" />
                        <label htmlFor="email">Email</label>
                    </div>
                    {/* password */}
                    <div className="input-area">
                        <input type="password" id="password" placeholder="" />
                        <label htmlFor="password">Password</label>
                    </div>
                    {/* confirm password */}
                    <div className="input-area">
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder=""
                        />
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <PasswordHideShowButton />
                    </div>

                    {/* bottom part  */}
                    <div className="text-center d-flex flex-column mt-3">
                        <button className="btn btn-primary px-5 py-2">
                            Sign up
                        </button>
                        <p className="mt-4">
                            Already have an account?{" "}
                            <span
                                className="text-primary link-text"
                                onClick={togglePage}
                            >
                                Login Here
                            </span>
                        </p>
                        <p className="border-top pt-2">
                            By clicking the sign up button you agree to our{" "}
                            <span className="text-primary link-text">
                                Terms and Condition
                            </span>{" "}
                            and{" "}
                            <span className="text-primary link-text">
                                Policy Privacy
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default RegisterPage;
