import { useEffect, useState, useRef } from "react";
import "../../index.css";

function Modal({ isOpen, onClose, children }) {
    const [isVisible, setIsVisible] = useState(false);
    const navigatingRef = useRef(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            navigatingRef.current = false;
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsVisible(false);

        setTimeout(() => {
            onClose();

            if (!navigatingRef.current) {
                window.location.reload();
            }
        }, 300);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            handleClose();
        }
    };

    const handleLinkClick = () => {
        navigatingRef.current = true;
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

                <div
                    onClick={(e) => {
                        if (e.target.tagName === "A") {
                            handleLinkClick();
                        }
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
