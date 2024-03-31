import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex justify-around font-bold text-md space-x-2 mx-3 my-3'>
      <h1>navbar</h1>
      <ul className='flex text-center flex-row space-x-2'>
        <Link href='/'>Home</Link>
        <li>User</li>
        <Link href='/pages/devices'>Devices</Link>
      </ul>
    </div>
  )
}
