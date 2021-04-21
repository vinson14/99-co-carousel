import React from "react";
import ImgSlideshow from "./ImgSlideshow";

const ListingItem = ({ onClick, listing, screensize = "xs" }) => {
    const listing_url = `https://99.co${listing.listing_url}`;

    const onClickHandler = () => {
        window.location.href = listing_url;
    };

    return (
        <div className={`grid-item-${screensize}`} onClick={onClickHandler}>
            {(screensize !== "xs" && (
                <ImgSlideshow imgs={listing.photos} screensize={screensize} />
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
