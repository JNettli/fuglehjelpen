import { useEffect, useState } from "react";
import "../../index.css";

function Modal({ isOpen, onClose, children }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    const handleOverlayClick = (e) => {
        if (e.target.className === "modal-overlay show") {
            handleClose();
        }
    };

    if (!isOpen && !isVisible) return null;

    return (
        <div
            className={`modal-overlay ${isVisible ? "show" : "hide"}`}
            onClick={handleOverlayClick}
        >
            <div className="modal">
                <button className="modal-close" onClick={handleClose}>
                    ✕
                </button>

                {children}
            </div>
        </div>
    );
}

export default Modal;
