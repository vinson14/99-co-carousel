import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListingItem from "./ListingItem";
import { fetchData } from "../actions/listings";

function mapStateToProps(state) {
    return {
        listings: state.listings.listings,
        firstRender: state.listings.firstRender,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => {
            dispatch(fetchData);
        },
    };
}

class ListingCarousel extends Component {
    static propTypes = {
        listings: PropTypes.object,
        firstRender: PropTypes.bool,
    };

    constructor(props) {
        super();
        this.state = {
            listings: props.listings,
            isTest: [],
            firstRender:
                typeof props.firstRender !== "undefined"
                    ? props.firstRender
                    : true,
        };
        this.updateListing = this.updateListing.bind(this);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.listings !== this.props.listings) {
            this.setState((state) => {
                return {
                    ...this.state,
                    listings: nextProps.listings,
                    firstRender: nextProps.firstRender,
                };
            });
        }
    }

    componentDidMount() {
        console.log("Componenet did mount");
        if (this.state.firstRender) {
            this.props.fetchData();
        }
    }

    updateListing(id) {
        console.log("update listing ran");
        this.setState({
            ...this.state,
            listings: this.state.listings.map((listing) => {
                const isTest = listing.id === id;
                if (!isTest) return listing;
                return {
                    ...listing,
                    isTest,
                };
            }),
        });
    }

    render() {
        const { listings } = this.state;

        if (!listings) return null;
        console.log("LISTINGS", listings);

        const items = listings.map((listing, index) => {
            return (
                <ListingItem
                    key={index}
                    listing={listing}
                    onClick={this.updateListing}
                />
            );
        });

        return (
            <div className="carousel-container">
                <div className="grid">
                    <div></div>
                    {items}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingCarousel);

const tracking = {
    event: "ListingItemClicked",
    listing: {
        formatted_tags: [
            {
                image_key: "videocam_outline_icon",
                color: "#1757d7",
                text: "REMOTE VIEWING",
                image_overlay_tag: true,
                image_alignment: "left",
                background_color: "#F0F6FF",
            },
        ],
        sub_category: "hdb_3r",
        listing_url:
            "/singapore/sale/property/747c-bedok-reservoir-crescent-hdb-Shd6PEkX8vfem8DGLXxxxf",
        street_name: "Bedok Reservoir Cres",
        postal_code: "473747",
        district_number: 16,
        date_formatted: "1 hr ago",
        id: "Shd6PEkX8vfem8DGLXxxxf",
        sub_category_formatted: "HDB 3 Rooms",
        overlays: [],
        street_number: "747C",
        main_category: "hdb",
        highlights: null,
        location: { district: "16" },
        address_name: "747C Bedok Reservoir Crescent",
        status: "active",
        property_segment: "residential",
        project_name: "747C Bedok Reservoir Crescent",
        shortlisted_state: false,
        tags: [],
        render_type: "must_see",
        photos: [
            {
                category: "Living Room",
                index: 0,
                caption: "Living Room",
                url:
                    "https://dwk5ggjgl5r05.cloudfront.net/v3/eek5KW9XUPLqehP3yW73FS?width=640&mode=fill&text=RYAN+ANIL&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=de85ce7816a1ca391c505ca528cf822ef2a45eef",
                section_index: 0,
                id: "eek5KW9XUPLqehP3yW73FS",
                photo_validity: {
                    text_undetected: true,
                    faces_undetected: true,
                },
            },
            {
                category: "Living Room",
                index: 1,
                caption: "Living Room",
                url:
                    "https://dwk5ggjgl5r05.cloudfront.net/v3/rGS3osiDdD2PWVKaYpxoih?width=640&mode=fill&text=RYAN+ANIL&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=4fbdfcaeeb03f8e1b55442dc1472f5b1744351e7",
                section_index: 0,
                id: "rGS3osiDdD2PWVKaYpxoih",
                photo_validity: {
                    text_undetected: true,
                    faces_undetected: true,
                },
            },
            {
                category: "Master Bedroom",
                index: 2,
                caption: "Master Bedroom",
                url:
                    "https://dwk5ggjgl5r05.cloudfront.net/v3/TaKpcDz74Ay8Jpi9HNMHF2?width=640&mode=fill&text=RYAN+ANIL&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=f2e1faf1d9d3ff198e68e686ea9a5172bcdccd75",
                section_index: 1,
                id: "TaKpcDz74Ay8Jpi9HNMHF2",
                photo_validity: {
                    text_undetected: true,
                    faces_undetected: true,
                },
            },
            {
                category: "Master Bathroom",
                index: 3,
                caption: "Master Bathroom",
                url:
                    "https://dwk5ggjgl5r05.cloudfront.net/v3/yfiQeJQvX5YwBJXsnZq6o4?width=640&mode=fill&text=RYAN+ANIL&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=f6bf72a5c091917de2ccb6b5a986b73881e2071a",
                section_index: 2,
                id: "yfiQeJQvX5YwBJXsnZq6o4",
                photo_validity: {
                    text_undetected: true,
                    faces_undetected: true,
                },
            },
            {
                category: "Kitchen",
                index: 4,
                caption: "Kitchen",
                url:
                    "https://dwk5ggjgl5r05.cloudfront.net/v3/4RyvxDvD9ZL3Fco2Miu3q8?width=640&mode=fill&text=RYAN+ANIL&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=389c2e642bf0bf8f1286f9de70de8954834ce06a",
                section_index: 3,
                id: "4RyvxDvD9ZL3Fco2Miu3q8",
                photo_validity: {
                    text_undetected: true,
                    faces_undetected: true,
                },
            },
            {
                category: "Bedroom",
                index: 5,
                caption: "Bedroom",
                url:
                    "https://dwk5ggjgl5r05.cloudfront.net/v3/9roDANfHpDKoArhbj7QYNB?width=640&mode=fill&text=RYAN+ANIL&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=9eeaf9a38bf788117dd5d11ab4d6c67bcefc10a4",
                section_index: 4,
                id: "9roDANfHpDKoArhbj7QYNB",
                photo_validity: {
                    text_undetected: true,
                    faces_undetected: true,
                },
            },
            {
                category: "Bedroom",
                index: 6,
                caption: "Bedroom",
                url:
                    "https://dwk5ggjgl5r05.cloudfront.net/v3/rEh2h88avD8qbeahYpud8P?width=640&mode=fill&text=RYAN+ANIL&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=8ac543dce15df28272273c57f727f2cef08b6ace",
                section_index: 4,
                id: "rEh2h88avD8qbeahYpud8P",
                photo_validity: {
                    text_undetected: true,
                    faces_undetected: true,
                },
            },
            {
                category: "Floor Plan",
                index: 99999,
                caption: "Floor Plan",
                url:
                    "https://dwk5ggjgl5r05.cloudfront.net/v3/zki6wEyNocpzs7rxPGChgd?width=640&mode=fill&text=RYAN+ANIL&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=bf2932521a10dcdcd369ecc4d3c510ba10a82ec9",
                section_index: 99999,
                id: "zki6wEyNocpzs7rxPGChgd",
                photo_validity: null,
            },
        ],
        user: {
            phone: "+6596868965",
            is_online: false,
            id: "KaYiSE2ao7rFiwHnhimf9C",
            photo_url:
                "https://dwk5ggjgl5r05.cloudfront.net/v3/s4St2USGNXmQZYXXc9ffLj?width=120&height=120&mode=fill&sampling=lanczos&quality=80&version=1&is_watermark=True&signature=7199927dc72ba226571611ce3246ced9ae03e9a9",
            name: "RYAN ANIL",
        },
        enquiry_flags: {
            is_regular_enquiry_allowed: true,
            is_call_allowed: true,
            is_whatsapp_enquiry_allowed: true,
        },
        tag_attributes: {},
        listing_type: "sale",
        within_distance_from_query: null,
        distance: null,
        unit_configuration: "3RM",
        commute_time: "0 mins",
        date_of_availability: null,
        flags: {
            has_v360: false,
            user_seen: false,
            user_shortlisted: false,
            is_must_see_verified: true,
            has_video: true,
            is_campaign_winner: false,
            user_enquired: false,
            is_promoted: null,
            agent_is_premium: true,
            user_show_phone: false,
            agent_99_only: true,
            is_must_see: true,
        },
        attributes: {
            completed_at: 2014,
            area_size_formatted: "936 sqft",
            bathrooms: 2,
            photo_counts: 8,
            price_formatted: "$675,000",
            price: 675000,
            other_price: "$675,000",
            area_ppsf: 721,
            area_size: 936,
            area_ppsf_formatted: "$721 psf",
            bedrooms: 3,
            tenure: "99 yrs",
            bedrooms_formatted: "3 Beds",
            bathrooms_formatted: "2 Baths",
        },
        address_line_2: "Singapore 473747 · D16",
        address_line_1: "747C Bedok Reservoir Cres",
    },
};
