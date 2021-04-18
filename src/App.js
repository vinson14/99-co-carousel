import React, { Component } from "react";
import ListingCarousel from "./components/ListingCarousel";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Listing Carousel</h2>
                </div>
                <ListingCarousel />
            </div>
        );
    }
}

export default App;
