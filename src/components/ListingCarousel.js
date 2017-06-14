import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/listings';

function mapStateToProps(state) {
  return {
    listings: state.listings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => {
      dispatch(fetchData());
    },
  };
}

class ListingCarousel extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { listings } = this.props;
    console.log(listings);
    return (
      <div></div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingCarousel);
