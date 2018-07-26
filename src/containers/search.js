import React, { Component } from 'react'
import axios from 'axios'
import Breweries from '../Breweries'

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
      axios.get(`http://beermapping.com/webservice/loccity/1d0dec692e53fe232ce728a7b7212c52/${this.state.value}&s=json`)
          .then((result) => {
            this.setState({
              results: result.data
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
    //console.log(this.state.results)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            City Name:
            <input
              type="string"
              value={this.state.value}
              onChange={this.handleChange}
          />
          </label>
          <div>
            <input type="submit" value="show me where the beer is!" />
          </div>
        </form>
        <div>
          <h3>
            {this.state.value}
          </h3>
        </div>

      <hr />
      <Breweries results={this.state.results}/>
         </div>
    )
  }
}

export default Search
