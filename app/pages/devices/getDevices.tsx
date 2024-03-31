'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'


export default function FetchDevices({ devices }: any) {
  const [deviceTerm, setDeviceTerm] = useState('')
  const [deviceList, setDeviceList] = useState([])



  return (
    <div className='w-1/2'>
      <section>
        <h1 className='text-xl text-blue-500 font-bold'>Search Devices</h1>
        <input className='border-2 border-gray-300 rounded-md p-2 w-full my-2'
          type="text"
          placeholder="Search Devices"
          onChange={(e) => { setDeviceTerm(e.target.value) }}
        />
      </section>
      <section>
        <table className='w-full my-2 text-center border border-gray-300 rounded'>
          <thead className='bg-gray-200 font-bold text-l'>
            <tr>
              <th>ID</th>
              <th>Device</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
          {devices
            .filter((device: any) => device.device.toLowerCase().includes(deviceTerm.toLowerCase()))
            .map((device: any) => {
              return <tr key={device.id}>
                <td>{device.id}</td>
                <td> {device.device}</td>
                <td>{device.createdAt.slice(0, 10)}</td>
              </tr>
            }
            )}</tbody>
      </table>
    </section>

    </div >
  )
}
