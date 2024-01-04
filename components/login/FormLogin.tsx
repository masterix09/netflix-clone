"use client";

import Link from "next/link";
import { loginAction, registrazioneAction } from "@/actions/login.actions";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const FormLogin = ({
  email,
  registrazione,
  title,
}: {
  email: string;
  registrazione: string;
  title: string;
}) => {
  const router = useRouter();

  const Login = async (formData: FormData) => {
    console.log("ci sono");
    await signIn("credentials", {
      redirect: false,
      email: formData.get("email"),
      password: formData.get("password"),
      callbackUrl: "/home",
    });
    router.push("/home");
  };

  const { data: session } = useSession();
  if (session) return router.push("/home");
  return (
    <div className="w-full md:w-[20%] flex flex-col px-6 py-3 bg-black/80 min-h-[500px]">
      <h1 className="text-white font-bold text-3xl my-8">{title}</h1>
      <form
        className="w-full flex flex-col gap-6"
        action={!!registrazione ? registrazioneAction : Login}
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          defaultValue={email}
          className="w-full h-[50px] rounded bg-black/15 border-white/50 border-[1px] px-6 text-white/50"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="w-full h-[50px] rounded bg-black/15 border-white/50 border-[1px] px-6 text-white/50"
        />
        <button
          type="submit"
          className="w-full bg-[#e50914] rounded py-3 text-white text-xl font-semibold"
        >
          Accedi
        </button>
      </form>
      {!registrazione && (
        <p className="text-gray-400 text-lg mt-10">
          Nuovo su netflix?{" "}
          <Link href="/login?registrazione=true">
            <span className="text-white hover:underline">Registrati</span>
          </Link>
        </p>
      )}
      {registrazione && (
        <p className="text-gray-400 text-lg mt-10">
          Gia iscritto?{" "}
          <Link href="/login">
            <span className="text-white hover:underline">Accedi</span>
          </Link>
        </p>
      )}
    </div>
  );
};

export default FormLogin;
