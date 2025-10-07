import Image from "next/image";
import Head from "next/head";
import React from "react";
import { Great_Vibes as GreatVibes } from "next/font/google";
import { DM_Serif_Text as DmSerif } from "next/font/google"; 
import { Fredoka } from "next/font/google";
import Link from "next/link";
import bren from "../assets/bren.jpg";
import nwy from "../assets/nwy.jpg";
import ling from "../assets/ling.jpg";

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

export default function Ucapan() {
  return (
    <div>
        <Head>
        <title>ucapan</title>
      </Head>

      {/* Navbar */}
      <nav
        className={`flex justify-between items-center p-5 px-6 bg-[#D6E4EB] text-black shadow-md fixed w-full top-0 z-10 ${greatVibes.className}`}
      >
        <h1 className="font-bold text-2xl">✮⋆˙ Lika Sweet Seventeen!!</h1>
        <ul className="flex space-x-5">
          <li className="font-semibold text-xl">
            <a href="/" className="hover:text-[#FFFFEB]">
              Home
            </a>
          </li>
          <li className="font-semibold text-xl">
            <a href="/gallery" className="hover:text-[#FFFFEB]">
              Gallery
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row justify-between items-center bg-[#FFFFEB] min-h-screen px-10 py-20 pt-32">
        <div>
           <h1 className={`${dmSerif.className} text-5xl font-bold mb-10 text-center text-[#5C4033]`}
           style={{ WebkitTextStroke: "2px #6B3E26", color: "#D0E0EB" }}>Happy B'day Yakk!! 
            </h1>
            <h2 className={`${fredoka.className} text-xl font-semibold mb-2 text-[#5C4033] text-center`}>Habede bungsuu, ciehhh tambah tua lu! 
           <br/> 17!17!17!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#FFEFF2] rounded-lg shadow-md p-6 max-w-sm border-2 border-[#5C4033] flex flex-col items-center">
          <Image src={ling} alt="Angeline" width={400} height={200} className="rounded-md mb-4"/>
          <Link href="/ling">
          <button
            className={`${fredoka.className} mt-2 px-6 py-3 bg-[#E6EEF3] hover:bg-[#D0E0EB] text-[#000000] rounded-md shadow`}
          >
            Dari Ling
          </button>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm border-2 border-[#5C4033] flex flex-col items-center">
          <Image src={nwy} alt="Ney" width={400} height={200} className="rounded-md mb-4"/>
          <Link href="/nwy">
          <button
            className={`${fredoka.className} mt-2 px-6 py-3 bg-[#FFEFF2] hover:bg-[#F8DFE4] text-[#000000] rounded-md shadow`}
          >
            Dari Ney
          </button>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-[#E0EEF5] rounded-lg shadow-md p-6 max-w-sm border-2 border-[#5C4033] flex flex-col items-center">
          <Image src={bren} alt="Brena" width={400} height={200} className="rounded-md mb-4"/>
          <Link href="/bren">
          <button
            className={`${fredoka.className} mt-2 px-6 py-3 bg-[#FFFFFF] hover:bg-[#E6E6E6] text-[#000000] rounded-md shadow`}
          >
            Dari Brena
          </button>
          </Link>
        </div>
        </div>
        </div>
      </main>

       <footer className="bg-[#D6E4EB] text-center p-4 text-black">
        <p className={`${fredoka.className} text-md`}>
          &copy; 2025 Lika Sweet Seventeen. All rights reserved.
        </p>
      </footer>
    </div>
  )}