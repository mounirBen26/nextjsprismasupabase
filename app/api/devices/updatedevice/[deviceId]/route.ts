import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PUT(request:Request, context:any){
    const {params} = context
    const {deviceId} = params
    const {device} = await request.json()
    const updateDevice = await prisma.device.update({
        where:{
            id:Number(deviceId)
        },
        data:{
            device:device
        }
    })
    return NextResponse.json(updateDevice)
}