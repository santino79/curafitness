import React from 'react'
import { Link } from 'gatsby'

export default function Banner() {
  return (
    <div className="Banner">
      <div className="nav-logo">
        <Link to="/">
          <img src="images/cf-logo-300x80.png" alt="Cura Fitness" />
        </Link>      
      </div>
    </div>
  )
}
