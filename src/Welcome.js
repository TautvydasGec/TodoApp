import React from 'react'
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1>Hello and Welcome to the Todo app</h1>
      <Link to="/app"><button>App</button></Link>
    </div>
  )
}
