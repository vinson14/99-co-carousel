import React from "react";

const ListingItem = ({ onClick, listing }) => {
    const onClickHandler = () => {
        onClick(listing.id);
    };

    return (
        <div className="grid-item">
            <img className="listing-image" src={`${listing.photos[0].url}`} />
            <div className="listing-details-container">
                <p className="listing-title" onClick={onClickHandler}>
                    {`${listing.sub_category_formatted} FOR SALE`}
                </p>
                <h5 className="listing-price">{`${listing.attributes.price_formatted}`}</h5>
                <a className="listing-address">{`${listing.address_line_1}`}</a>
                <p className="listing-details">{`${listing.attributes.bedrooms} Beds   ${listing.attributes.bathrooms} Baths   ${listing.attributes.area_size_formatted}`}</p>
            </div>
        </div>
    );
};

export default ListingItem;
