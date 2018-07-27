import React, { Component } from 'react'
import { Divider, Card, Container } from 'semantic-ui-react'
import BreweryCard from './BreweryCard' //todo

class BreweryList extends Component {
  constructor(props) {
  super(props)
  }
  render() {
    const breweryList = this.props.results.map(brewery => (

      <BreweryCard
        name={brewery.name}
        street={brewery.street}
        blogmap={brewery.blogmap}
        reviewlink={brewery.reviewlink}
        phone={brewery.phone}
      />

    ))
    return breweryList
  }
}

class Board extends Component {
  constructor(props) {
  super(props)
  }
  render() {
    return (
      <div>
       <Divider />
       <Container>
       <Card.Group itemsPerRow={5}>
         <BreweryList results={this.props.results}/>
        </Card.Group>
      </Container>
      </div>
    )
  }
}
export default Board
