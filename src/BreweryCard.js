import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import './App.css'

class BreweryCard extends Component {
  render() {
    return (
      <Card color='blue'>
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Description>
            {this.props.street}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default BreweryCard
