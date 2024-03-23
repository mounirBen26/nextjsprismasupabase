import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(){
    const devices = await prisma.device.findMany()
    return NextResponse.json(devices)
}