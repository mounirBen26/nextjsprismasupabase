'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'


export default function FetchDevices({ devices }: any) {
  const [deviceTerm, setDeviceTerm] = useState('')
  const [deviceList, setDeviceList] = useState([])
  const filteredDevice = devices.filter((device:any)=>{
    return device.device.toLowerCase().includes(deviceTerm.toLowerCase())
  })
  //navigation part
  const itemsPerpage = 5
  const totalPages = Math.round(filteredDevice / itemsPerpage)
  const currentPage = 4
  const lastIndex = itemsPerpage * currentPage
  const startIndex =  lastIndex - itemsPerpage
  console.log(startIndex,lastIndex)

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
          {filteredDevice.length > 0 ? 
          (filteredDevice.map((device: any) => {
            return <tr key={device.id} className='border'>
              <td className='p-1'>{device.id}</td>
              <td> {device.device}</td>
              <td>{device.createdAt.slice(0, 10)}</td>
            </tr>
          }
          ))
          :
          (<tr  className='border'> <td colSpan={3}>No data found</td></tr>)
            
            }</tbody>
      </table>
    </section>
    <section className='text-red-500 text-center flex flex-row justify-center space-x-2 bg-gray-200'>
      {Array.from({length:filteredDevice.length}).map((_,i)=>{
        return <p className='cursor-pointer hover:bg-emerald-300 hover:text-white rounded-md p-1' key={i}>{i + 1}</p>
      })}
    </section>
    </div >
  )
}
