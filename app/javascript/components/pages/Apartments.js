import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, CardText } from 'reactstrap'

class Apartments extends Component {
  render() {
    return(
      <>
        <h4>Apartments Available for Rent</h4>
        <br />
        <Col sm="6">
          {this.props.apartments.map(apartment => {
            return(
              <Card body key={apartment.id}>
                <CardTitle>
                  <h4>{apartment.street}</h4>
                  <br />
                  <h5>{apartment.city}, {apartment.state}</h5>
                </CardTitle>
                <CardImg src={apartment.image} />
                <CardText>
                  <br />
                  Price: {apartment.price}
                  <br />
                  Number of Bedrooms: {apartment.bedrooms}
                  <br />
                  Number of Bathrooms: {apartment.bathrooms}
                  <br />
                  Types of Pets Allowed: {apartment.pets}
                </CardText>
              </Card>
            )
          })}
        </Col>
      </>
    )
  }
}

export default Apartments
