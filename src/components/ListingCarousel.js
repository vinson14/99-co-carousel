import React, { Component, useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch, useSelector } from "react-redux";
import ListingItem from "./ListingItem";
import { fetchData } from "../actions/listings";
import selectAllListings from "../selectors/listings";

const ListingCarousel = () => {
    const { listings, firstRender, pageNum } = useSelector(selectAllListings);
    console.log(`${pageNum} from use selector`);
    const dispatch = useDispatch();
    const grid = useRef(null);
    const endOfGrid = useRef(null);

    // Perform first fetch of listing data
    useEffect(() => {
        fetchData(dispatch);
    }, []); // Use blank array to ensure fetchdata only occurs on initial render

    const scrollObserver = (container, endOfContainer) => {
        // Callback function when reached the end of grid
        const obsCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    fetchData(dispatch, pageNum + 1);
                    observer.disconnect();
                }
            });
        };
        // Setting up new intersection observer
        const intersectionObserver = new IntersectionObserver(obsCallback, {
            root: container.current,
        });
        intersectionObserver.observe(endOfContainer);
        return intersectionObserver;
    };

    useEffect(() => {
        if (grid.current && endOfGrid.current && listings.length) {
            const observer = scrollObserver(grid.current, endOfGrid.current);

            return () => {
                console.log("disconnect observer");
                observer.disconnect();
            };
        }
    }, [grid, endOfGrid, scrollObserver, listings, pageNum]);

    return (
        <div className="carousel-container">
            <div className="grid" ref={grid}>
                <div></div>
                {listings.length > 0 &&
                    listings.map((listing, index) => (
                        <ListingItem key={index} listing={listing} />
                    ))}
                <div ref={endOfGrid}></div>
            </div>
        </div>
    );
};

export default ListingCarousel;
