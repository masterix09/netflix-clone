import { GetActionMovies } from "@/actions/home.actions";
import Carousel from "@/components/home/Carousel";
import HeroVideo from "@/components/home/HeroVideo";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/login");
  const list = await GetActionMovies("1", "28");

  return (
    <main className="w-full min-h-screen bg-black flex flex-col overflow-hidden">
      <HeroVideo />
      <div className="w-full h-full flex flex-col gap-y-10">
        <div className="w-full -translate-y-1/3 z-30 h-full">
          <Carousel movies={list} titleCategorie="Film di Azione" />
        </div>
        <div className="w-full -translate-y-1/3 z-30 h-full">
          <Carousel movies={list} titleCategorie="Film di Azione" />
        </div>
      </div>
    </main>
  );
}
