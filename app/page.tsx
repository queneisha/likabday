import Image from "next/image";
import Head from "next/head";
import React from "react";
import cake from "./assets/cake.png";
import { Great_Vibes as GreatVibes } from "next/font/google";
import { DM_Serif_Text as DmSerif } from "next/font/google"; 
import { Fredoka } from "next/font/google";
import Link from "next/link";

const fredoka = Fredoka({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const dmSerif = DmSerif({
  weight: "400",
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const greatVibes = GreatVibes({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>✮⋆˙ Lika Sweet Seventeen!!</title>
      </Head>

      {/* Navbar */}
      <nav
        className={`flex justify-between items-center p-5 px-6 bg-[#D6E4EB] text-black shadow-md fixed w-full top-0 z-10 ${greatVibes.className} `}
      >
        <h1 className="font-bold text-2xl">✮⋆˙ Lika Sweet Seventeen!!</h1>
        <ul className="flex space-x-5">
          <li className="font-semibold text-xl">
            <Link href="/" className="hover:text-[#FFFFEB]">
              Home
            </Link>
          </li>
          <li className="font-semibold text-xl">
            <Link href="/gallery" className="hover:text-[#FFFFEB]">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row justify-between items-center bg-[#FFFFEB] min-h-screen px-10 py-20 pt-32">
      
      {/* Left Side Text */}
        <div className="md:w-1/2 text-center md:text-center space-y-2">
          <h1 className={`${dmSerif.className} text-6xl md:text-8xl font-bold text-[#6B3E26] drop-shadow-[2px_2px_0px_#ffffff]`} 
          style={{ WebkitTextStroke: "2px #6B3E26", color: "#D0E0EB" }}>
            Happy
          </h1>
          <h1 className={`${greatVibes.className} text-7xl md:text-9xl text-[#6B3E26]`} 
          style={{ WebkitTextStroke: "2px #6B3E26", color: "#FFFFFF" }}>
            Birthday
          </h1>
          <h1 className={`${dmSerif.className} text-6xl md:text-8xl font-bold text-[#6B3E26]`} 
          style={{ WebkitTextStroke: "2px #6B3E26", color: "#FFEFF2" }}>
            Zalika!
          </h1>
          <p className={`${fredoka.className} text-lg md:text-xl mt-4 text-[#000000]`}>
            From Anjazz
          </p>
          <Link href="/ucapan">
          <button
            className={`${fredoka.className} mt-2 px-6 py-3 bg-[#E6EEF3] hover:bg-[#D0E0EB] text-[#000000] rounded-md shadow`}
          >
            Klik woy
          </button>
          </Link>
        </div>

      {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image src={cake} alt="Birthday Cake" width={400} height={400} className="drop-shadow-md" />
        </div>
      </main>

      <footer className="bg-[#D6E4EB] text-center p-4 text-black">
        <p className={`${fredoka.className} text-md`}>
          &copy; 2025 Lika Sweet Seventeen. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
