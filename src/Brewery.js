import React, { Component } from 'react'

class Brewery extends Component {
  render(){
    return (
      <li key={this.props.name}>{this.props.name}, {this.props.street}</li>
    )
  }
}

export default Brewery
