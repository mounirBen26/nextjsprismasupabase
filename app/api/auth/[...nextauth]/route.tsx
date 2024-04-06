import { CredentialsProvider } from "next-auth/providers/credentials";
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
                password:{label:"Password",type:"password"}
            },
            async authorize(credentials:any,req:Request){

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