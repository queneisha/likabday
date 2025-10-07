import Image from "next/image";
import React from "react";
import { Great_Vibes as GreatVibes } from "next/font/google";
import { DM_Serif_Text as DmSerif } from "next/font/google"; 
import { Fredoka } from "next/font/google";
import satu from "../assets/satu.jpg";
import dua from "../assets/dua.jpg";
import tiga from "../assets/tiga.jpg";
import empat from "../assets/empat.jpg";
import lima from "../assets/lima.jpg";
import enam from "../assets/enam.jpg";
import tuju from "../assets/tuju.jpg";
import lapan from "../assets/lapan.jpeg";
import sembilan from "../assets/sembilan.jpg";
import spuluh from "../assets/spuluh.jpeg";
import elev from "../assets/elev.jpg";
import twelve from "../assets/twelve.jpg";
import thirdteen from "../assets/thirdteen.jpg";
import fourteen from "../assets/fourteen.jpg";
import fiveteen from "../assets/fiveteen.jpg";
import sixteen from "../assets/sixteen.jpg";
import sventeen from "../assets/sventeen.jpg";
import eighteen from "../assets/eighteen.jpg";
import nineteen from "../assets/nineteen.jpg";
import twenty from "../assets/twenty.jpg";
import tweone from "../assets/tweone.jpg";
import twetwo from "../assets/twetwo.jpg";
import lika from "../assets/lika.jpg";
import u1 from "../assets/u1.jpg";
import u2 from "../assets/u2.jpg";
import u3 from "../assets/u3.jpg";
import u6 from "../assets/u6.jpg";
import Head from "next/head";

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

export default function Buddies() {
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
         <main className="flex flex-col items-center bg-[#FFFFEB] min-h-screen pt-4">
    <div className="flex flex-col items-center  min-h-screen px-10 py-20 w-full">
        <h1 className="text-3xl font-bold mb-2 text-center text-[#5C4033]">
            Galleryyy
            <br />────୨ৎ────
        </h1>
        <h2 className="text-xl text-center mb-4 font-medium text-[#5C4033]">
        “dikit aja ya, cpek”
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#D6E4EB] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={satu} alt="Mayumi" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
          <Image src={dua} alt="Brena" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 3 */}
        <div className="bg-[#FFEFF2] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={tiga} alt="Angeline" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 4 */}
        <div className="bg-[#D6E4EB] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={empat} alt="Zalika" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
          <Image src={lima} alt="Nayla" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 6 */}
        <div className="bg-[#FFEFF2] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={enam} alt="Nabila" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 7 */}
        <div className="bg-[#D6E4EB] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={tuju} alt="Rel" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 8 */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
          <Image src={lapan} alt="Sobat" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 9 */}
        <div className="bg-[#FFEFF2] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={sembilan} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 10 */}
        <div className="bg-[#D6E4EB] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={spuluh} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 11 */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
          <Image src={elev} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 12 */}
        <div className="bg-[#FFEFF2] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={twelve} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 13 */}
        <div className="bg-[#D6E4EB] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={thirdteen} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 14 */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
          <Image src={fourteen} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 15 */}
        <div className="bg-[#FFEFF2] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={fiveteen} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 16 */}
        <div className="bg-[#D6E4EB] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={sixteen} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 17 */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
          <Image src={sventeen} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 18 */}
        <div className="bg-[#FFEFF2] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={eighteen} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 19 */}
        <div className="bg-[#D6E4EB] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={nineteen} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 20 */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
          <Image src={twenty} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 21 */}
        <div className="bg-[#FFEFF2] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={tweone} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 22*/}
        <div className="bg-[#D6E4EB] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={twetwo} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 23 */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
          <Image src={lika} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 24 */}
        <div className="bg-[#FFEFF2] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={u1} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 25 */}
        <div className="bg-[#D6E4EB] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={u2} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 26 */}
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
          <Image src={u3} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
        </div>

        {/* Card 27 */}
        <div className="bg-[#FFEFF2] rounded-lg shadow-md p-6 max-w-sm">
          <Image src={u6} alt="Hyuka" width={400} height={200} className="rounded-md mb-4"/>
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
  );
}