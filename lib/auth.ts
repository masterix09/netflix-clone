import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { Adapter } from "next-auth/adapters";
import prisma from "./db";


export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              email: { label: "email", type: "email", placeholder: "Email" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              // Add logic here to look up the user from the credentials supplied

              if(!credentials?.email || !credentials.password) {console.log("INSERISCI CREDENZIALI"); return null}
              
              const user = await prisma.user.findFirst({
                  where: {
                      email: credentials?.email,
                  }
              })

              if(!user) {console.log("NON CI SONO EMAIL UGUALI "); return null}

              // check if password match

              const matchPassword = await bcrypt.compare(credentials.password, user.hashedPassword as string)

              if(!matchPassword) {
                console.log("PASSWORD NON MATCHANO");
                return null
              }

              // if email and password match so return user 
              console.log("OK")
              return user
            }
          })
    ],
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    // debug: process.env.NODE_ENV === 'development',
    pages: {
        signIn: '/login',

    }
    
} satisfies NextAuthOptions