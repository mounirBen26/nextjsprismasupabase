
import FetchDevices from './getDevices'

async function fetchDeviceList(){
    const res = await fetch('http://localhost:3000/api/devices/listdevices',{
      next:{
        revalidate: 0
      }
    })
    return res.json()
}

export default async function page() {
  const deviceList:any = await fetchDeviceList()
  return (
    <div className="flex items-center justify-center p-24 w-full">
      <FetchDevices devices={deviceList}/>
    </div>
  )
}



