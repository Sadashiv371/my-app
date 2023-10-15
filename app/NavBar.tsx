import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav>
        <Link href="/" >Logo</Link>

        <ul>
            <li><Link href="/">DASHBOARD</Link> </li>
            <li><Link href="/issues">Issues</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar