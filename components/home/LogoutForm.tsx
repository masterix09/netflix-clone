"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutForm = () => {
  return (
    <form action={() => signOut()}>
      <button
        type="submit"
        className="rounded bg-red-500 text-xl text-white font-bold"
      >
        signout
      </button>
    </form>
  );
};

export default LogoutForm;
