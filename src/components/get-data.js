import React, { Component } from 'react'
import axios from 'axios'

class GetData extends Component {
  constructor(props) {
    super(props)
  }

  // This will:
  // 1. Call the API and request a cat
  // 2. Use the setCatData from App.js to set App.js's state
  componentDidMount() {
    axios.get('/api/cats').then(res => this.props.setCatData(res.data))
  }

  render() {
    return <div>I don't do anything. I just get data!</div>
  }
}

export default GetData
