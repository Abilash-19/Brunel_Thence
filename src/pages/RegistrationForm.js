import React, { useState } from "react";
import RegisterationNav from "../components/RegisterationNav";
import Herotext from "../components/Herotext";
import { useNavigate } from "react-router-dom";
export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setMail(email);
    if (!validateEmail(email)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/success");
  };

  const isFormValid = () => {
    return name.trim() !== "" && validateEmail(mail) && !emailError;
  };

  return (
    <>
      <RegisterationNav />

      <section className="container mx-auto h-screen w-screen mt-32  overflow-hidden ">
        <div className="">
          <Herotext
            style_text="Registration Form"
            main_text1="Start your success"
            main_text2="Journey here!"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex  flex-col justify-center items-center overflow-hidden "
        >
          <input
            placeholder="Enter your name"
            type="text"
            className="outline-none border-none bg-[#efefef] rounded-[64px] p-[24px] w-[417px] text-[#827a7a] text-[20px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Enter your email"
            type="email"
            className="outline-none border-none bg-[#efefef] rounded-[64px] p-[24px] w-[417px] mt-[24px] text-[#827a7a] text-[20px]"
            value={mail}
            onChange={handleEmailChange}
          />
          {emailError && (
            <p className="text-red-600  inline-flex gap-2 items-center mr-36 mt-2 font-[500]  ">
              {" "}
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6.89941"
                  y="4.00024"
                  width="3.2"
                  height="8"
                  fill="white"
                />
                <path
                  d="M8.50162 14.6666C4.81973 14.6666 1.83496 11.6818 1.83496 7.99992C1.83496 4.31802 4.81973 1.33325 8.50162 1.33325C12.1835 1.33325 15.1683 4.31802 15.1683 7.99992C15.1683 11.6818 12.1835 14.6666 8.50162 14.6666ZM7.83496 9.99992V11.3332H9.16829V9.99992H7.83496ZM7.83496 4.66658V8.66658H9.16829V4.66658H7.83496Z"
                  fill="#FF0808"
                />
              </svg>
              {emailError}
            </p>
          )}
          <input
            type="submit"
            value="Submit"
            className={`${
              isFormValid() ? "bg-black cursor-pointer " : "bg-[#c9c9c9]"
            } rounded-[107.06px] p-[24px] w-[417px] mt-[48px] text-white text-[18px] font-[600] `}
            disabled={!isFormValid()}
          />
        </form>
      </section>
    </>
  );
}
