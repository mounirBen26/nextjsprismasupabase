import React from 'react'
import FetchDevices from './getDevices'

async function fetchDeviceList(){
    const res = await fetch('http://localhost:3000/api/devices/listdevices')
    return res.json()
}

export default async function page() {
  const deviceList:any = await fetchDeviceList()
  return (
    <div className="flex items-center justify-center p-24">
      <FetchDevices devices={deviceList}/>
    </div>
  )
}



