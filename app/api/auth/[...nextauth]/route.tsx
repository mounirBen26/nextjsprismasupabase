"use client"
import CredentialsProvider  from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import bcrypt from 'bcrypt'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    provides:[
        CredentialsProvider({
            name:"Credentials",
            crendentials:{
                username:{label:"Username",type:"text"},
                password:{label:"Password",type:"password"},
                email:{label:"Email",type:"email"}
            },
            async authorize(credentials:any,req:Request){
                //check if emails and passwords are provided
                if(!credentials.email || !credentials.password){
                    return null
                }
                //check if user exists
                const userExist = await prisma.user.findUnique({
                    where:{
                        email:credentials.email
                    }
                })
                if(!userExist){
                    return null
                }
                //check if password is correct
                const passwordValid = await bcrypt.compare(credentials.password, userExist.hashedPassword)
                if(!passwordValid){
                    return null
                }
                //if everything is correct return user
                return userExist
            },
        }
    )
    ],
    session:{
        strategy:"jwt"
    },
    secret:process.env.NEXTAUTH_SECRET,
    debug:process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)

export {handler as GET , handler as POST}