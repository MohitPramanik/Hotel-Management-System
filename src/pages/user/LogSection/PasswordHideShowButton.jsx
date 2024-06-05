import { IoEye, IoEyeOff } from "react-icons/io5";

function PasswordHideShowButton({ show, toggle }) {
    return (
        <div
            className="password-hide-show-btn"
            style={{ cursor: "pointer" }}
            onClick={() => toggle(!show)}
        >
            {show ? <IoEye className="text-blue-500" /> : <IoEyeOff />}
        </div>
    );
}

export default PasswordHideShowButton;
