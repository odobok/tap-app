import React, {Component} from 'react'
import Brewery from './Brewery'
//import Recipes from './Recipes'


const Breweries = (props) => {

  const breweryList = props.results.map(brewery => (
    <Brewery
      name={brewery.name}
      street={brewery.street}
    />
  ))
  return breweryList
}

export default Breweries
