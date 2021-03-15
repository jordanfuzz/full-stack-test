import React, { Component } from 'react'

// This can be a function component, because it doesn't track state of its own
function UseData(props) {
  if (!props.catData) return null

  return (
    <div>
      <h1>Name: {props.catData.name}</h1>
      <h2>Color: {props.catData.color}</h2>
      <h2>Likes: </h2>
      {props.catData.likes.map((like, i) => {
        return <p key={i}>{like}</p>
      })}
    </div>
  )
}

export default UseData
