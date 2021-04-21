import React from "react";
import ImgSlideshow from "./ImgSlideshow";

const ListingItem = ({ listing, screensize = "xs" }) => {
    // Use template literal to compose the listing url
    const listing_url = `https://99.co${listing.listing_url}`;

    // onClick handler to redirect user to listing url
    const onClickHandler = () => {
        window.location.href = listing_url;
    };

    return (
        <div className={`grid-item-${screensize}`} onClick={onClickHandler}>
            {/* Determine if the slideshow should be used */}
            {(screensize !== "xs" && (
                <ImgSlideshow imgs={listing.photos} />
            )) || (
                <img
                    className="listing-image"
                    src={`${listing.photos[0].url}`}
                />
            )}
            <div className="listing-details-container">
                <p className="listing-title">
                    {`${listing.sub_category_formatted} FOR SALE`}
                </p>
                <h5 className="listing-price">{`${listing.attributes.price_formatted}`}</h5>
                <a
                    href={listing_url}
                    className="listing-address"
                >{`${listing.address_line_1}`}</a>
                <p className="listing-details">{`${listing.attributes.bedrooms} Beds   ${listing.attributes.bathrooms} Baths   ${listing.attributes.area_size_formatted}`}</p>
            </div>
        </div>
    );
};

export default ListingItem;
