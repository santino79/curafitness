import React from 'react'
import { Link } from 'gatsby'

export default function Navigation() {
  return (
    <nav className="Navigation">
    <Link className="Navigation-item" to="/about/">
      About
    </Link>
    <Link className="Navigation-item" to="/success-stories/">
      Success Stories
    </Link>
    <Link className="Navigation-item" to="/what-we-do/">
      What We Do
    </Link>
    <Link className="Navigation-item" to="/contact/">
      Contact
    </Link>
  </nav>			

  )
}