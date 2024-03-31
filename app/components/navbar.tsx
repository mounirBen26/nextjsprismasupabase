import React from 'react'
import Link from 'next/link'

export default function navbar() {
  return (
    <div>
      <h1>navbar</h1>
      <ul>
        <Link href='/'>Home</Link>
        <li>User</li>
        <li>Devices</li>
      </ul>
    </div>
  )
}
