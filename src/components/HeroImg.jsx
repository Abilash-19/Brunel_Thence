import React from "react";
import Imgcard1 from "./Imgcard1";
import Imgcard2 from "./Imgcard2";
import Carousel from "./Carousel";
import Imgcard3 from "./Imgcard3";

export default function HeroImg() {
  return (
    <section className="  max-w-[1320px] mx-auto flex flex-col md:flex-row  place-items-start   ">
      <div className="h-[500.65px] w-[600.29px] rounded-[50.7px] relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/c086/323e/b8fae54c91face434e9ea448a875ea3e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPPJu~LH5jYqxc8GcYbYi8GpYZgu3j-AFGk6P5AmeOJnOVh~MFFvaY-W2zLzP1Z-nbTnsFqaK9IwMhqY17hc~mTOe-T65fjKPsSLz2IuGlJPXLjCD0Nft~wq1uZntYN3HhCA5uVhv~0Et663QLCcv3lOLUCpuJFYrd1zDpR94UWGVhMmI-PnyW1EWDkGgfPIdMIBlyMQ5X9F7n2nNNI55Hp56B3F~tOPgUcBN9jDOTv2kKq1BuNYd-QxrPNSlQ~iJKerpafsOWRN14nu-xFnt8KbvT-IrBC3BatAs~MMcHy5IJBnBrAol9VY6q2kPz1p1ifSVXMX3tnrb9N4L74Zpg__"
          className="h-full w-full absolute object-cover object-top   rounded-[50.7px]  "
          alt="Image"
        />
        <Imgcard1 />
        <Imgcard2 />
        <Imgcard3 />
      </div>
      <div className="relative flex flex-1  flex-col items-center   h-full  ">
        <div className="flex flex-col gap-[4.3rem] z-10">
          <h1 className="font-[600] text-[40px]   w-[398px]  leading-tight text-primarybg mt-14 ">
            {" "}
            Enhance fortune 50 company’s insights teams research capabilities
          </h1>

          <Carousel />
          <button className=" max-w-[245px] font-[600] text-[20px] bg-primarybg p-btnpadding rounded-btnradius px-btnpaddingx  py-btnpaddingy text-white  hover:bg-btnhover  ">
            Explore More &rarr;
          </button>
        </div>
        <div className="h-full w-full flex  absolute left-[230px] flex-wrap overflow-hidden " >
          <div className="h-[200px] w-[200px]  rounded-3xl  border  border-[#7c7c7c] opacity-10  " ></div>
          <div className="h-[200px] w-[200px]  rounded-3xl  border  border-[#7c7c7c] opacity-10  " ></div>
          <div className="h-[200px] w-[200px]  rounded-3xl  border  border-[#7c7c7c] opacity-10  " ></div>
          <div className="h-[200px] w-[200px]  rounded-3xl  border  border-[#7c7c7c] opacity-10  " ></div>
          <div className="h-[200px] w-[200px]  rounded-3xl  border  border-[#7c7c7c] opacity-10  " ></div>
          <div className="h-[200px] w-[200px]  rounded-3xl  border  border-[#7c7c7c] opacity-10  " ></div>
          <div className="h-[200px] w-[200px]  rounded-3xl  border  border-[#7c7c7c] opacity-10  " ></div>
          <div className="h-[200px] w-[200px]  rounded-3xl  border  border-[#7c7c7c] opacity-10  " ></div>
          <div className="h-[200px] w-[200px]  rounded-3xl  border  border-[#7c7c7c] opacity-10  " ></div>
        </div>
      </div>
    </section>
  );
}
