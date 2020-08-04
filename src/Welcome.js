import React from 'react'
import { Link } from "react-router-dom";
import './Welcome.css'

export default function Welcome() {
  return (
    <div className = "Welcome">
      <h1>Hello and Welcome to the Todo app</h1>
      <Link to="/app"><button className = "app-button">App</button></Link>
    </div>
  )
}
