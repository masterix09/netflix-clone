"use client";

import FormLogin from "@/components/login/FormLogin";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const registrazione = searchParams.get("registrazione");

  return (
    <main className="w-full min-h-screen">
      <section className="relative min-h-screen w-full flex flex-col gap-8 items-center mt-24 md:mt-0 md:justify-center bg-black md:bg-black/25 px-3">
        <Image
          src="/assets/background-landing.jpg"
          alt="background image"
          fill
          priority
          className="hidden md:block absolute top-0 left-0 -z-10 brightness-50 object-cover"
        />
        <FormLogin
          email={email as string}
          registrazione={registrazione as string}
          title={!!registrazione ? "Registrati" : "Accedi"}
        />
      </section>
    </main>
  );
}
