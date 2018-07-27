import React, { Component } from 'react'
import { Card, Button, Header, Image, Modal } from 'semantic-ui-react'
import './App.css'

class BreweryCard extends Component {
  render() {
    return (
      <Modal style={{height:'100%'}} trigger={
          <Card>
            <Card.Content>
              <Card.Header>{this.props.name}</Card.Header>
              <Card.Description>
                {this.props.street}
              </Card.Description>
            </Card.Content>
          </Card>}>
        <Modal.Header>{this.props.name}</Modal.Header>
        <h3><a href={this.props.reviewlink}>See reviews</a></h3>
        <h3>{this.props.phone}</h3>
        <Modal.Content style={{height:'100%'}} scrolling>
        <iframe
           ref="iframe"
           src={this.props.blogmap}
           frameBorder={'2'}
           width={'100%'}
           height={'500px'}
         />
        </Modal.Content>
      </Modal>
    )
  }
}

export default BreweryCard
