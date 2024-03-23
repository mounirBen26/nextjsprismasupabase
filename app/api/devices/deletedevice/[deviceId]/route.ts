import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();  

export async function DELETE(request:Request, context:any){
    const {params} = context;
    const {deviceId} = params;
    const deleteDevice = await prisma.device.delete({
        where:{
            id:Number(deviceId)
        }
    })
    return NextResponse.json(deleteDevice)
}