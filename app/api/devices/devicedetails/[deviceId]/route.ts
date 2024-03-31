import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request:Request, context:any){
    const {params} = context;
    const {deviceId} = params;
    const deviceDetails = await prisma.device.findUnique({
        where:{
            id: Number(deviceId)
        }
    })
    return NextResponse.json(deviceDetails)
}