import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      textInput: '',
    }
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
      </div>
    )
  }
}

export default App
