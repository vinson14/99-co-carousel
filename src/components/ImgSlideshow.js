import React, { useCallback, useEffect, useRef, useState } from "react";

const ImgSlideshow = ({ imgs = [] }) => {
    const [imgNum, setImgNum] = useState(0);
    const imgsRef = useRef([]);

    const nextImgNum = useCallback((n) => {
        if (n < imgsRef.current.length - 1) {
            return n + 1;
        } else {
            return 0;
        }
    }, []);

    const prevImgNum = useCallback((n) => {
        if (n > 0) {
            return n - 1;
        } else {
            return imgsRef.current.length - 1;
        }
    }, []);

    useEffect(() => {
        if (imgsRef.current.length > 0) {
            // Lazily Load Next image
            const imgToLoad = imgsRef.current[nextImgNum(imgNum)];
            imgToLoad.src = imgToLoad.dataset.src;
        }
    }, [imgsRef, imgNum, nextImgNum]);

    const addToRef = (element) => {
        if (imgsRef.current.length < imgs.length) {
            imgsRef.current.push(element);
        }
    };

    return (
        <div className="slideshow-container">
            {imgs.map((img, index) => {
                const showImg = index === imgNum;
                return (
                    <img
                        key={`${img.id}${index}`}
                        className={`slideshow-img ${(showImg && "show") || "hidden-right"}`}
                        alt={img.caption}
                        src={(index === 0 && img.url) || ""}
                        data-src={img.url}
                        ref={(element) => addToRef(element)}
                    />
                );
            })}
            <button
                className="prev-image"
                onClick={() => setImgNum((n) => prevImgNum(n))}
                disabled={imgNum === 0}
            >
                Previous Img
            </button>
            <button
                className="next-image"
                onClick={() => setImgNum((n) => nextImgNum(n))}
                disabled={imgNum === imgsRef.current.length - 1}
            >
                Next Img
            </button>
        </div>
    );
};

export default ImgSlideshow;
