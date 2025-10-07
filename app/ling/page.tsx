import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Great_Vibes as GreatVibes } from "next/font/google";
import { DM_Serif_Text as DmSerif } from "next/font/google"; 
import { Fredoka } from "next/font/google";
import lika from "../assets/lika.jpg"

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


export default function Ling() {
  return (
    <div>
        <Head>
        <title>ucapan</title>
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
       <main className="flex flex-col items-center bg-[#FFFFEB] min-h-screen px-10 py-20 pt-32">
  {/* Teks tengah */}
  <h1
    className={`${dmSerif.className} text-5xl font-bold mb-10 text-center text-[#5C4033]`}
    style={{ WebkitTextStroke: "2px #6B3E26", color: "#D0E0EB" }}
  >
    𖹭 HAPPY BIRTHDAYY!! 𖹭
  </h1>

  {/* Bagian Foto + Message */}
  <div className="flex flex-col md:flex-row items-start md:items-stretch gap-6">
    {/* Foto */}
    <div className="bg-[#FFEFF2] p-2 rounded-lg border-2 border-[#5C4033] flex-shrink-0">
      <Image
        src={lika} 
        alt="Lika"
        width={300}
        height={300}
        className="rounded-md"
      />
        <p className={`${fredoka.className} text-lg text-[#5C4033] text-center`}>
          Ur fav photo by Ling
        </p>
    </div>

    {/* Kotak Pesan */}
    <div className="bg-white p-4 rounded-lg border-2 border-[#5C4033] w-90 h-auto mt-10 mb-10">
      <p className={`${fredoka.className} text-lg mb-2 text-[#5C4033]`}>
        <span className="font-bold italic">From: Ling </span>
      </p>
      <p className={`${fredoka.className} text-lg mb-2 text-[#5C4033]`}>
        <span className="font-bold italic">Message:</span>
      </p>
      <p className="text-black mt-3">
        Happy Birthday Likaaaa!! Panjang umur, sehat selalu bebs, tambah pintar ye, tambah ambis likk jan gak ambis lu, tambah tua eak, 
        blajar bwa motor cpat gw capek hrus bwa motor bahh, sekalian request itu dedeknya boleh??
      </p>
    </div>
  </div>
  {/* Tombol Kembali */}
      <Link href="/ucapan">
      <button className="mt-6 px-6 py-2 bg-[#D6E4EB] text-[#5C4033] rounded-lg hover:bg-[#D0E0EB] transition">
        Kembali
      </button>
      </Link>
</main>

        <footer className="bg-[#D6E4EB] text-center p-4 text-black">
        <p className={`${fredoka.className} text-md`}>
          &copy; 2025 Lika Sweet Seventeen. All rights reserved.
        </p>
      </footer>
    </div>
  )}