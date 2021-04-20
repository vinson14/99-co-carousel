import React, { useCallback, useEffect, useRef, useState } from "react";

const ImgSlideshow = ({ imgs = [] }) => {
    const [imgNum, setImgNum] = useState(0);
    const imgsRef = useRef([]);

    // const imgObserver = useCallback((container) => {
    //     const obsCallback = (entries, obs) => {
    //         entries.forEach((entry) => {
    //             if (entry.intersectionRatio > 0) {
    //                 entry.target.src = entry.target.dataset.src;
    //             }
    //         });
    //     };
    //     const observer = new IntersectionObserver(obsCallback, { root: container });
    //     return observer;
    // }, []);

    const nextImgNum = useCallback((n) => {
        if (n < imgsRef.current.length - 1) {
            return n + 1;
        } else {
            return 0;
        }
    }, []);

    useEffect(() => {
        if (imgsRef.current.length > 0) {
            // Lazily Load Next image
            const nextImg = nextImgNum(imgNum);
            const imgToLoad = imgsRef.current[nextImg];
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
                    <div key={`${img.id}${index}`} className="slideshow-img-container">
                        <img
                            className={`slideshow-img ${showImg && "show"}`}
                            alt={img.caption}
                            src={(index === 0 && img.url) || ""}
                            data-src={img.url}
                            ref={(element) => addToRef(element)}
                        />
                    </div>
                );
            })}
            <button onClick={() => setImgNum((n) => nextImgNum(n))}>Next Img</button>
        </div>
    );
};

export default ImgSlideshow;
