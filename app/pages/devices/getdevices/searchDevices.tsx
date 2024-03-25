"use client"
import React from 'react'
import {useState, useEffect} from 'react'

export default function SearchDevices() {
    const [devices, setDevices] = useState('')
    console.log('devices----', devices)
  return (
      <main className="mb-2">
          <h1 className='text-xl text-blue-500 font-bold'>Search Devices</h1>
          <input className='border-2 border-black rounded-md p-2 w-full m' 
              type="text"
              placeholder="Search Devices"
              value={devices}
              onChange={(e) => setDevices(e.target.value)}
          />
      </main>
  )
}
