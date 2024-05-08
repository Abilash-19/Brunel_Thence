import React, { useEffect, useState } from "react";
import RegisterationNav from "../components/RegisterationNav";
import Herotext from "../components/Herotext";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
    // return () => clearTimeout(timerId);
  }, [timer]);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 5000);

    // return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <>
      <RegisterationNav />
      <section className="h-screen w-screen flex flex-col justify-center items-center gap-[20px]">
        <svg
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.0014 67.3219C15.5919 67.3219 0.668091 52.3979 0.668091 33.9886C0.668091 15.5791 15.5919 0.655273 34.0014 0.655273C52.4107 0.655273 67.3347 15.5791 67.3347 33.9886C67.3347 52.3979 52.4107 67.3219 34.0014 67.3219ZM30.6768 47.3219L54.2471 23.7517L49.5331 19.0377L30.6768 37.8939L21.2488 28.4656L16.5347 33.1799L30.6768 47.3219Z"
            fill="#28B246"
          />
        </svg>

        <header className="">
          <p className="font-style text-center text-green font-[400] text-[36px]    ">
            Success Submitted
          </p>
          <h1 className="font-[600] text-[56px] text-center leading-[67.2px] tracking-[-2%] ">
            Congratulations
          </h1>
        </header>
        <p className="text-center font-[500] text-[27px] max-w-[718px] text-[#727272] ">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>

        <p className="mt-[154px] text-[20px] font-[400] text-[#727272] ">
          Redirecting you to Homepage in{" "}
          <span className="font-bold text-black">{timer} Seconds</span>{" "}
        </p>
      </section>
    </>
  );
}
