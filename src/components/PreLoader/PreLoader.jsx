import { useEffect, useState } from "react";
import "./PreLoader.css";

const MIN_TIME = 1500; // minimum koto ms loader dekhabe

const PreLoader = ({ children }) => {
    // shudhu first visit-e dekhabe (tab/session bondho hole abar dekhabe)
    const [show, setShow] = useState(() => {
        try {
            return !sessionStorage.getItem("preloaderShown");
        } catch {
            return true;
        }
    });
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (!show) return;

        const start = Date.now();
        let hideTimer, removeTimer;

        const finish = () => {
            const wait = Math.max(0, MIN_TIME - (Date.now() - start));
            hideTimer = setTimeout(() => {
                setFadeOut(true);
                removeTimer = setTimeout(() => {
                    setShow(false);
                    try {
                        sessionStorage.setItem("preloaderShown", "true");
                    } catch { /* ignore */ }
                }, 600); // fade animation-er shomoy
            }, wait);
        };

        if (document.readyState === "complete") {
            finish();
        } else {
            window.addEventListener("load", finish);
        }

        return () => {
            window.removeEventListener("load", finish);
            clearTimeout(hideTimer);
            clearTimeout(removeTimer);
        };
    }, [show]);

    return (
        <>
            {show && (
                <div className={`preloader ${fadeOut ? "preloader-hide" : ""}`}>
                    <div className="preloader-content">
                        <div className="preloader-ring">
                            <span className="preloader-initials">AU</span>
                        </div>
                        <h2 className="preloader-name">Azim Uddin</h2>
                        <p className="preloader-role">Full Stack Developer</p>
                        <div className="preloader-bar">
                            <div className="preloader-bar-fill"></div>
                        </div>
                    </div>
                </div>
            )}
            {children}
        </>
    );
};

export default PreLoader;