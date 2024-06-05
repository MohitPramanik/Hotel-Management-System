import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import LogLayout from "./pages/user/LogSection/LogLayout";

function App() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleLog = () => {
        setIsLogin((prev) => !prev);
    };

    return (
        <>
            {isLogin ? (
                <>
                    <Navbar logOut={toggleLog} />
                    <Outlet />
                    <Footer />
                </>
            ) : (
                <LogLayout login={toggleLog} />
            )}
        </>
    );
}

export default App;
