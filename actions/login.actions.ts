"use server";


import { redirect } from "next/navigation";
import bcrypt from "bcrypt"
import prisma from "@/lib/db";
import { signIn } from "next-auth/react";

export async function loginAction(formData: FormData) {
   
    const rawFormData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // console.log(rawFormData)

    fetch(
      'http://localhost:3000/api/auth/signin/credentials',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: rawFormData.email, password: rawFormData.password }),
      }
    )
    
  }

 export async function registrazioneAction(formData: FormData) {
    
    const rawFormData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const isEmailUnvalid = await prisma.user.findFirst({
      where: {
        email: rawFormData.email as string,
      },
    });
    if (isEmailUnvalid) {
      console.log("Email already exist");
      return redirect(`/login?email=${rawFormData.email}&registrazione=true`);
    }
    const hashedPassword = await bcrypt.hash(
      rawFormData.password as string,
      10
    );
    await prisma.user.create({
      data: {
        email: rawFormData.email as string,
        hashedPassword: hashedPassword,
      },
    });
  }

  export async function logoutAction() {


    const jwt = await fetch('http://localhost:3000/api/auth/csrf', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    })

    const token = JSON.stringify(jwt.json())
    console.log("TOKEN -> ", token)
   
    const signOut = await fetch(`http://localhost:3000/api/auth/signout?callbackUrl=http://localhost:3000/api/auth/session`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
        csrf: token
      })
  });


  
  }