import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request) {
    const {device} = await request.json()
    const newDevice = await prisma.device.create({
        data:{
            device:device
        }
    })
    return NextResponse.json(newDevice)
}