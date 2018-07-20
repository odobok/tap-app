import React, { Component } from 'react'
import axios from 'axios'
//import Recipes from './Recipes'

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
      axios.get(`http://beermapping.com/webservice/locquery/process.env.REACT_APP_API_KEY/${this.state.value}`)
          .then(({data}) => {
            this.setState({
              results:data.breweries
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Zip Code
            <input
              type="number"
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
              </div>
    )
  }
}

export default Search
