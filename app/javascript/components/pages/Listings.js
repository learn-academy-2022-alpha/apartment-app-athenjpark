import React, { Component } from 'react'

class Listings extends Component {
  render() {
    return(
      <>
        <h3>This is the Apartment Listings Page</h3>
        <h4>Apartments Available for Rent</h4>
        <ul>
          {this.props.apartments && this.props.apartments.map(apartment => {
            return <p key={apartment.id}>{apartment.street}</p>
          })}
        </ul>
      </>
    )
  }
}

export default Listings
