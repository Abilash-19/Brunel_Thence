import React from "react";

export default function Herotext({ style_text, main_text1, main_text2 }) {
  return (
    <header className="mb-[112px]">
      <p className="font-style text-center text-green font-[400] text-[36px]    ">
        {style_text}
      </p>
      <h1 className="font-[600] text-[56px] text-center leading-[67.2px] tracking-[-2%] ">
        {" "}
        {main_text1} <span className="block"> {main_text2} </span>{" "}
      </h1>
    </header>
  );
}
