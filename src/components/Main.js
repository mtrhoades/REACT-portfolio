import React from 'react'

export default function Main(props) {
  return (
    <div>
        <h1>Main</h1>
        <li>{props.name}</li>
        <li>{props.role}</li>
        <h2>About</h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
        </div>
  )
}

