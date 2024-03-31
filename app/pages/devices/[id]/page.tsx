import NotFound from '../../../not-found'

async function getDeviceDetails(id:number) {
    const res = await fetch(`http://localhost:3000/api/devices/devicedetails/${id}`)
    if(!res.ok){
        NotFound()
    }
    return res.json()
}

export default async function page({params}:any) {
    const {id}= params
    const device = await getDeviceDetails(id)
  return (
    <main>
      <h1>{device.device}</h1>
      <p>{device.createdAt}</p>


    </main>
    
  )
}
