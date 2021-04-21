import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListingItem from "./ListingItem";
import { fetchData } from "../actions/listings";
import selectAllListings from "../selectors/listings";
import { updateScreensize } from "../actions/screen";
import getScreensize from "../selectors/screen";

const ListingCarousel = () => {
    const { listings, pageNum } = useSelector(selectAllListings);
    const { screensize } = useSelector(getScreensize);
    const dispatch = useDispatch();
    const gridRef = useRef(null);
    const endOfGridRef = useRef(null);

    // Perform first fetch of listing data
    useEffect(() => {
        fetchData(dispatch);
    }, [dispatch]); // Use blank array to ensure fetchdata only occurs on initial render

    useEffect(() => {
        dispatch(updateScreensize(window.innerWidth));
    }, [dispatch]);

    // UseEffect Hook to listen for window resize
    useEffect(() => {
        const handleResize = () => {
            dispatch(updateScreensize(window.innerWidth));
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dispatch]);

    const scrollObserver = useCallback(
        (container, endOfContainer) => {
            // Callback function when reached the end of grid
            const obsCallback = (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio > 0) {
                        fetchData(dispatch);
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
        },
        [pageNum, dispatch]
    );

    // useEffect hook to create scroll observer
    useEffect(() => {
        if (
            gridRef.current &&
            endOfGridRef.current &&
            listings.length &&
            screensize === "xs"
        ) {
            const observer = scrollObserver(
                gridRef.current,
                endOfGridRef.current
            );
            // Return function to cleanup observer
            return () => {
                observer.disconnect();
            };
        }
    }, [gridRef, endOfGridRef, listings, scrollObserver]);

    const items = () => {
        if (screensize !== "xs") {
            return listings
                .slice(0, 4)
                .map((listing, index) => (
                    <ListingItem
                        key={index}
                        listing={listing}
                        screensize={screensize}
                    />
                ));
        }

        return listings.map((listing, index) => (
            <ListingItem
                key={index}
                listing={listing}
                screensize={screensize}
            />
        ));
    };

    return (
        <div className="carousel-section">
            <div className={`carousel-container-${screensize}`}>
                <div className={`grid-${screensize}`} ref={gridRef}>
                    {screensize === "xs" && <div></div>}
                    {listings.length > 0 && items()}
                    <div ref={endOfGridRef}></div>
                </div>
            </div>
        </div>
    );
};

export default ListingCarousel;
