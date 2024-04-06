import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex justify-around text-md space-x-2 mx-3 my-3'>
      <h1>Logo</h1>
      <ul className='flex text-center flex-row space-x-2'>
        <Link href='/' className='hover:text-white hover:bg-blue-500 hover:rounded-md px-2 '>Home</Link>
        <li>User</li>
        <Link href='/pages/devices'
         className='hover:text-white hover:bg-emerald-400 hover:rounded-md px-2'>Devices</Link>
      </ul>
    </div>
  )
}
