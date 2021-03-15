import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import GetData from './components/get-data'
import UseData from './components/use-data'

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      textInput: '',
      catData: null,
    }

    // Remember to bind the new function, it won't work otherwise
    this.setCatData = this.setCatData.bind(this)
  }

  handleClick = () => {
    axios.get('/api/user').then(res => {
      this.setState({ username: res.data.username })
    })
  }

  handleTextChange = value => {
    this.setState({
      textInput: value,
    })
  }

  handleNameUpdate = () => {
    axios
      .put('/api/user', { newUsername: this.state.textInput })
      .then(res => console.log(res.data))
  }

  // This function will be passed to the <GetData /> component as a prop
  // But it will set App.js state instead, because the function is defined here
  setCatData = cat => {
    this.setState({ catData: cat })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Click me!</button>
        <p>{this.state.username}</p>

        <label>New username: </label>
        <input
          value={this.state.textInput}
          onChange={e => this.handleTextChange(e.target.value)}
        />
        <button onClick={this.handleNameUpdate}>Update</button>
        <GetData setCatData={this.setCatData} />
        <UseData catData={this.state.catData} />
      </div>
    )
  }
}

export default App
