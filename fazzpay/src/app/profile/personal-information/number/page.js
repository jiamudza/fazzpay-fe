"use client";
import FooterAfterLogin from "../../../../app/components/FooterAfterLogin";
import Header from "../../../../app/components/Header";
import MainMenu from "../../../../app/components/MainMenu";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { BsTelephone } from "react-icons/bs";

export default function Number() {
    const route = useRouter()

  const [number, setNumber] = useState({});
  const [formatError, setFormatError] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleNumber = (e) => {
    const numberInput = " " + e.target.value;
    let numberArray = [];

    setErrorMessage(false);

    if (
      e.target.value[0] === "0" ||
      typeof e.target.value === "undefined" ||
      e.target.value.length <= 3
    ) {
      setFormatError(true);
    } else {
      setFormatError(false);
      numberArray = numberInput.match(/.{1,4}/g) ?? [];
    }

    setNumber({
      ...number,
      phone: `+62${numberArray.join("-")}`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      url: `https://fazz.adaptable.app/api/v1/user/${
        JSON.parse(localStorage.getItem("@fazzLogin")).user.user_id
      }`,
      method: "PATCH",
      data: number,
    })
      .then((res) => {
        route.push(`/profile/personal-information`)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-page">
      <header className="px-10 py-6 bg-white">
        <Header />
      </header>
      <main className="flex mb-10">
        <aside className="hidden lg:block">
          <MainMenu />
        </aside>
        <div className="p-10 w-full m-10 bg-white rounded-xl shadow-xl">
          <h4 className="font-bold text-xl">Edit Phone Number</h4>
          <p className="text-slate-400 w-80 mt-5">
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </p>

          <form className="mt-10 w-full">
            <p
              className={
                (errorMessage === true ? "visible" : "invisible") +
                " font-semibold text-red-400 bg-red-200 px-10 py-2 rounded-lg"
              }
            >
              *Number format is not valid
            </p>
            <div className="flex justify-start items-center gap-3 border-b-2 border-slate-400 w-80 mx-auto mt-10 py-2 px-2">
              <BsTelephone className="text-slate-400" />
              <p className="font-semibold">+62</p>
              <label htmlFor="number"></label>
              <input
                onChange={handleNumber}
                id="number"
                name="phone-number"
                className="focus:outline-none font-semibold"
                type="number"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex justify-center mt-5">
              {formatError === false ? (
                <button
                  className="button-primary mx-auto"
                  onClick={handleSubmit}
                >
                  Edit Phone Number
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setErrorMessage(true);
                  }}
                  className="border mx-auto cursor-default bg-slate-300 px-6 py-2 rounded-lg font-semibold text-slate-400"
                >
                  Edit Phone Number
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
      <footer>
        <FooterAfterLogin />
      </footer>
    </div>
  );
}
