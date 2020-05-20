import React, { PureComponent } from "react";

class ListingItem extends PureComponent {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.listing.id);
  }

  render() {
    const { isTest } = this.props.listing;
    return <p onClick={this.onClick}>{isTest ? "Test" : "Real"}</p>;
  }
}

export default ListingItem;
