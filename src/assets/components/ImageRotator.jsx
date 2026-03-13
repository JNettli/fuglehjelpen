import { useState, useEffect } from "react";

function ImageRotator({ images }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="image-stack">
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    className={`image-layer ${i === index ? "active" : ""}`}
                    alt=""
                />
            ))}
        </div>
    );
}

export default ImageRotator;
