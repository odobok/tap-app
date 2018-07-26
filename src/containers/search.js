import React, { Component } from 'react'
import axios from 'axios'
//import Recipes from './Recipes'

let config = {
  headers: {
     'content-type': 'application/json',
     'Access-Control-Allow-Origin': 'http://192.168.0.7:3000/',
  }
}

class Search extends Component {
    constructor(props) {
      super(props)
      this.state={
        value: '',
        results: [ ]
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.getBreweries = this.getBreweries.bind(this)
    }

    getBreweries = () => {
      axios.get(`http://beermapping.com/webservice/locquery/${process.env.REACT_APP_API_KEY}/${this.state.value}&s=json`)
          .then((data) => {
            console.log(data)
            this.setState({
              results: data
            })
          })
    }

    handleChange(event) {
      this.setState({value: event.target.value})
    }

    handleSubmit(event) {
      this.getBreweries()
      event.preventDefault()
    }

  render () {
    console.log(process.env.REACT_APP_API_KEY)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            City Name
            <input
              type="string"
              value={this.state.value}
              onChange={this.handleChange}
          />
          </label>
            <input type="submit" value="submit" />
        </form>
        <div>
          <h3>
            {this.state.value}
          </h3>
        </div>

      <hr />
      {/*  <Breweries results={this.state.results}/> */}
      <ul>
        {this.state.results.map(brewery => {
          return <li>{brewery.name} </li>
        })}
      </ul>

              </div>
    )
  }
}

export default Search
