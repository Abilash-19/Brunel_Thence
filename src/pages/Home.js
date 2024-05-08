import React from "react";
import Navbar from "../components/Navbar";
import Herotext from "../components/Herotext";
import HeroImg from "../components/HeroImg";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white container mx-auto">
        <Herotext
          style_text="Success stories"
          main_text1="Every success journey"
          main_text2="we’ve encountered."
        />

        <HeroImg />

        <Faq />
      </main>
      <footer className=" container mt-[20px] mx-auto  flex justify-between items-center py-[60px] px-[47.5px] bg-[#f5f5f5] rounded-[40px]  ">
        <span className=" text-primarybg text-[18px] font-[500] ">
          <span className="font-bold">&copy;</span> 2023. All rights reserved
        </span>
        <div className="inline-flex gap-[52px] font-[500] text-[18px] ">
          <a href="#" className="underline">
            {" "}
            Terms & Conditions{" "}
          </a>
          <a href="#" className="underline">
            {" "}
            Privacy Policy{" "}
          </a>
        </div>
      </footer>
    </>
  );
}
