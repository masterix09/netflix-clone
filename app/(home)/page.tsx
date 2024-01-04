import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import PopCorn from "@/public/assets/popcorn.png";
import SectionLanding from "@/components/landing/SectionLanding";
import Bambini from "@/public/assets/bambini.png";
import DevicePile from "@/public/assets/device-pile.png";
import Phone from "@/public/assets/phone.jpg";
import TV from "@/public/assets/tv.png";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  async function registrationAction(formData: FormData) {
    "use server";

    const rawFormData = {
      email: formData.get("email"),
    };

    if (rawFormData.email) {
      return redirect(`/login?email=${rawFormData.email}&registrazione=true`);
    }
    redirect("/login");
  }
  const session = await getServerSession(authOptions);
  if (session) return redirect("/home");
  return (
    <main className="w-full min-h-screen">
      <section className="relative min-h-[90vh] w-full flex flex-col gap-8 items-center justify-center bg-black/35 px-3">
        <Image
          src="/assets/background-landing.jpg"
          alt="background image"
          fill
          priority
          className="absolute top-0 left-0 -z-10 brightness-50 object-cover"
        />
        <h1 className="text-2xl md:text-5xl text-white font-bold text-center">
          Risate. Lacrime. Brividi. Li trovi tutti su Netflix.
        </h1>
        <h3 className="text-white text-lg md:text-xl text-center font-medium">
          Intrattenimento senza fine a partire da soli 5,49 €. Disdici quando
          vuoi.
        </h3>
        <h3 className="text-white text-lg md:text-xl text-center font-medium">
          Vuoi guardare Netflix? Inserisci l&apos;indirizzo email per abbonarti
          o riattivare il tuo abbonamento.
        </h3>
        <form
          action={registrationAction}
          className="flex flex-col md:flex-row gap-6 items-center justify-center w-full md:w-fit"
        >
          <input
            type="email"
            id="email"
            name="email"
            className="w-full md:w-[400px] h-[50px] rounded bg-black/15 border-white/50 border-[1px] px-6 text-white/50"
            placeholder="Email"
          />

          <button
            type="submit"
            name="submit"
            id="submit"
            className="flex items-center justify-center rounded w-full md:w-[140px] h-[50px] px-2 bg-[#e50914] hover:cursor-pointer text-white text-md"
          >
            Invia
            <IoIosArrowForward
              className="text-white"
              style={{ width: "30px", height: "30px" }}
            />
          </button>
        </form>
      </section>
      <section className="w-full md:w-[80%] mx-auto bg-gradient-to-r from-blue-900 via-red-700 to-blue-900 flex justify-center items-center gap-10 py-5 px-3 md:-translate-y-[50%]">
        <Image src={PopCorn} alt="popcorn" className="object-contain" />
        <div className="flex flex-col">
          <h3 className="text-md md:text-xl text-white font-bold">
            Tutto ciò che ami di Netflix a soli 5,49 €.
          </h3>
          <h3 className="text-base md:text-lg text-white">
            Scegli il piano Standard con pubblicità.
          </h3>
        </div>
      </section>
      <section className="my-10">
        <SectionLanding
          image={TV}
          title="Goditi Netflix sulla tua TV"
          text="Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi."
          reverse
        />
        <SectionLanding
          image={DevicePile}
          title="Guarda Netflix ovunque"
          text="Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming film e serie TV senza limiti."
        />
        <SectionLanding
          image={Bambini}
          title="Crea profili per i bambini"
          text="I bambini scoprono nuove avventure in compagnia dei loro personaggi preferiti in uno spazio tutto loro già incluso nel tuo abbonamento.."
          reverse
        />
        <SectionLanding
          image={Phone}
          title="Scarica le tue serie da guardare offline"
          text="Guarda in aereo, sul treno, in astronave..."
        />
      </section>
    </main>
  );
}
