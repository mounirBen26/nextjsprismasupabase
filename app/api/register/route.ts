import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
const prisma = new PrismaClient()

export async function POST(request: Request) {
    
    const data = await request.json()
    const {name,email, password } = data.data

    if(!name || !email || !password){
        return new NextResponse('Please enter all fields', {status: 400})
    }
    const checkDuplicate = await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(checkDuplicate){
        return NextResponse.json({message:"User already exists"})
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const addNewItem = await prisma.user.create({
        data:{
            name,
            email,
            hashedPassword
        }
    })

    // })
  return NextResponse.json(data)
}