import React, { useCallback, useEffect, useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const ImgSlideshow = ({ imgs = [], screensize }) => {
    const [imgNum, setImgNum] = useState(0);
    const [prevImgNum, setPrevImgNum] = useState(0);
    const [pristine, setPristine] = useState(true);
    const imgsRef = useRef([]);

    const getNextImgNum = useCallback((n) => {
        return n < imgsRef.current.length - 1 ? n + 1 : 0;
    }, []);

    const getPrevImgNum = useCallback((n) => {
        return n > 0 ? n - 1 : imgsRef.current.length - 1;
    }, []);

    useEffect(() => {
        if (imgsRef.current.length > 0) {
            // Lazily Load Next image
            const imgToLoad = imgsRef.current[getNextImgNum(imgNum)];
            imgToLoad.src = imgToLoad.dataset.src;
        }
    }, [imgsRef, imgNum, getNextImgNum]);

    const addToRef = (element) => {
        if (imgsRef.current.length < imgs.length) {
            imgsRef.current.push(element);
        }
    };

    const nextImg = () => {
        if (pristine) {
            setPristine(false);
        } else {
            setPrevImgNum(imgNum);
        }
        setImgNum((n) => getNextImgNum(n));
    };

    const prevImg = () => {
        setPrevImgNum(imgNum);
        setImgNum((n) => getPrevImgNum(n));
    };

    const getClassNames = (n) => {
        if (pristine) {
            return n === 0 ? "show" : "hidden-right";
        } else if (imgNum > prevImgNum) {
            if (imgNum === n) {
                return "enter-from-right";
            } else if (prevImgNum === n) {
                return "exit-to-left";
            } else {
                return n > imgNum ? "hidden-right" : "hidden-left";
            }
        } else {
            if (imgNum === n) {
                return "enter-from-left";
            } else if (prevImgNum === n) {
                return "exit-to-right";
            } else {
                return n > imgNum ? "hidden-right" : "hidden-left";
            }
        }
    };

    return (
        <div className={`slideshow-container`}>
            {imgs.map((img, index) => {
                return (
                    <img
                        key={`${img.id}${index}`}
                        className={`slideshow-img ${getClassNames(index)}`}
                        alt={img.caption}
                        src={(index === 0 && img.url) || ""}
                        data-src={img.url}
                        ref={(element) => addToRef(element)}
                    />
                );
            })}
            <button
                className="prev-image-button"
                onClick={prevImg}
                disabled={imgNum === 0}
            >
                <i className="fas fa-chevron-left"></i>
            </button>
            <button
                className="next-image-button"
                onClick={nextImg}
                disabled={imgNum === imgsRef.current.length - 1}
            >
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default ImgSlideshow;
