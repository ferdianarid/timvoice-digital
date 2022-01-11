import NextAuth from "next-auth"

// Github Provider
import GithubProvider from "next-auth/providers/github"

// Google Provider
import GoogleProvider from "next-auth/providers/google"

// Prisma Adapter
import { PrismaAdapter } from "@next-auth/prisma-adapter"

// Prisma Client
import { PrismaClient } from "@prisma/client"

require("dotenv/config")

const prisma = new PrismaClient()

export default NextAuth({
    // Provider like Github, Twitter, Google
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        //  Google Providers
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },
            callback: process.env.CALLBACK_GOOGLE
        })
    ],
    // JWT Private Key
    jwt: {
        signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
    },
    // Database URL Config
    database: process.env.DATABASE_URL,
    adapter: PrismaAdapter(prisma)
})