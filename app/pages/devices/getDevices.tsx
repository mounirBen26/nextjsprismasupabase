'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'


export default  function FetchDevices({devices}:any) {
   const [deviceTerm, setDeviceTerm] = useState('')
   const [deviceList, setDeviceList] = useState([])
   


  return (
    <div>
      <section>
      <h1 className='text-xl text-blue-500 font-bold'>Search Devices</h1>
          <input className='border-2 border-gray-300 rounded-md p-2 w-full my-2' 
              type="text"
              placeholder="Search Devices"
              onChange={(e) =>{setDeviceTerm(e.target.value)} }
          />
      </section>
      <section>
      {devices
      .filter((device:any) => device.device.toLowerCase().includes(deviceTerm.toLowerCase()))
      .map((device:any)=>{

      return <p key={device.id} className="text-sm font-bold mb-2 text-center hover:bg-blue-500 hover:text-white hover:scale-105 transition duration-100">{device.device} <span className='cursor-pointer bg-red-500 text-white px-2'><Link href={`/pages/devices/${device.id}`}>view</Link></span> </p> })}
      </section>
    
    </div>
  )
}
