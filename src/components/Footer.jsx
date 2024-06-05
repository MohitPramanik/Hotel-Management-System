import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useId } from "react";

function Footer() {
    const quickLinks = [
        {
            link: "",
            text: "About Us",
        },
        {
            link: "",
            text: "Services",
        },
        {
            link: "",
            text: "Reviews",
        },
        {
            link: "",
            text: "Location",
        },
    ];

    const socialMediaLinks = [
        {
            link: "",
            icon: <FaInstagram />,
            text: "Instagram",
        },
        {
            link: "",
            icon: <FaXTwitter />,
            text: "Twitter",
        },
        {
            link: "",
            icon: <FaLinkedin />,
            text: "Linked in",
        },
    ];

    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase mb-4">Quick Links</h5>
                        <ul className="list-unstyled">
                            {quickLinks.map((item) => (
                                <li key={useId()}>{item.text}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase mb-4">Follow Us</h5>
                        <ul className="list-unstyled">
                            {socialMediaLinks.map((item) => (
                                <li key={useId()}>
                                    <a
                                        href={item.link}
                                        className="text-white text-decoration-none"
                                    >
                                        {item.icon} {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 pe-4">
                        <h5 className="text-uppercase mb-4">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>+91 1234567890</li>
                            <li>Main Branch: Ratu Road, Opp. Galaxia Mall</li>
                            <li>@mohitpramanik548@gmail.com</li>
                        </ul>
                    </div>

                    {/* Desclaimer */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 className="text-uppercase mb-4">Disclaimer</h5>
                        <p>
                            The purpose of this application is only for booking
                            the rooms and legal actions can be taken for copying
                            the content.
                        </p>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="text-center">
                    <p>
                        &copy; 2024 Hotel Management App. All rights reserved.
                    </p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <Link to="/terms" className="text-white">
                                Terms of Service
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/privacy" className="text-white">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
