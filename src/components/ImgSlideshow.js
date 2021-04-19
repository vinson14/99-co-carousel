import React from "react";

const ImgSlideshow = ({ imgs }) => {
    console.log(imgs);
    return (
        <div className="slideshow-container">
            {imgs.map((img, index) => (
                <div key={`${img.id}${index}`} className="img-container">
                    <img src={img.url} />
                </div>
            ))}
        </div>
    );
};

export default ImgSlideshow;
