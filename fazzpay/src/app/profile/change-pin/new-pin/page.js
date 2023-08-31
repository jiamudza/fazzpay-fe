"use client";
import React, { useState } from "react";
import Header from "../../../../components/Header";
import MainMenu from "../../../../components/MainMenu";
import FooterAfterLogin from "../../../../components/FooterAfterLogin";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function NewPin() {

  const router = useRouter()
  const [pin, setPin] = useState([]);
  const [pinError, setPinError] = useState(false);

  const { data } = useSelector((state) => state.userDataById);

  const handleChange = (e) => {
    e.preventDefault();

    if (pin.length < 6) {
      setPinError(true);
    } else {
      axios({
        url: `https://fazz.adaptable.app/api/v1/user/${data.user_id}`,
        method: "PATCH",
        data: {pin},
      })
        .then((res) => {
          router.push("/profile");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="bg-[#e5e5e5]">
      <header className="px-10 py-6 bg-white">
        <Header />
      </header>
      <main className="flex mb-10">
        <aside className="hidden lg:block">
          <MainMenu />
        </aside>
        <div className="main-content">
          <h4 className="font-bold">Change PIN</h4>
          <p className="text-sm mt-5 text-slate-400 w-80">
            Enter your current 6 digits Fazzpay PIN below to continue to the
            next steps
          </p>
          <p
              className={
                (pinError !== true ? "invisible" : "visible") +
                " font-semibold text-red-400 bg-red-200 px-10 py-2 rounded-lg mt-5"
              }
            >
              *PIN value must be 6 digits of number
            </p>
          <div className="flex gap-2 justify-center mt-10">
            <input
              onChange={(e) => {
                if (e.target.value.length > 1) {
                  e.target.value = e.target.value[0];
                }

                setPin(e.target.value);
                e.target.value.length === 1
                  ? e.target.nextSibling.focus()
                  : e.target.focus();
              }}
              type="number"
              minLength={0}
              maxLength={1}
              className="w-10 h-14 text-2xl text-center text-blue-400 border-2 rounded-md border-blue-400 focus:outline-none focus:shadow-[0px_0px_8px_0px_#4fd1c5] caret-transparent"
            />
            <input
              onChange={(e) => {
                if (e.target.value.length > 1) {
                  e.target.value = e.target.value[0];
                }

                setPin(pin + e.target.value);
                e.target.value.length === 1
                  ? e.target.nextSibling.focus()
                  : e.target.previousSibling.focus();
              }}
              type="number"
              minLength={0}
              maxLength={1}
              className="w-10 h-14 text-2xl text-center text-blue-400 border-2 rounded-md border-blue-400 focus:outline-none focus:shadow-[0px_0px_8px_0px_#4fd1c5] caret-transparent"
            />
            <input
              onChange={(e) => {
                if (e.target.value.length > 1) {
                  e.target.value = e.target.value[0];
                }

                setPin(pin + e.target.value);
                e.target.value.length === 1
                  ? e.target.nextSibling.focus()
                  : e.target.previousSibling.focus();
              }}
              type="number"
              minLength={0}
              maxLength={1}
              className="w-10 h-14 text-2xl text-center text-blue-400 border-2 rounded-md border-blue-400 focus:outline-none focus:shadow-[0px_0px_8px_0px_#4fd1c5] caret-transparent"
            />
            <input
              onChange={(e) => {
                if (e.target.value.length > 1) {
                  e.target.value = e.target.value[0];
                }

                setPin(pin + e.target.value);
                e.target.value.length === 1
                  ? e.target.nextSibling.focus()
                  : e.target.previousSibling.focus();
              }}
              type="number"
              minLength={0}
              maxLength={1}
              className="w-10 h-14 text-2xl text-center text-blue-400 border-2 rounded-md border-blue-400 focus:outline-none focus:shadow-[0px_0px_8px_0px_#4fd1c5] caret-transparent"
            />
            <input
              onChange={(e) => {
                if (e.target.value.length > 1) {
                  e.target.value = e.target.value[0];
                }

                setPin(pin + e.target.value);
                e.target.value.length === 1
                  ? e.target.nextSibling.focus()
                  : e.target.previousSibling.focus();
              }}
              type="number"
              minLength={0}
              maxLength={1}
              className="w-10 h-14 text-2xl text-center text-blue-400 border-2 rounded-md border-blue-400 focus:outline-none focus:shadow-[0px_0px_8px_0px_#4fd1c5] caret-transparent"
            />
            <input
              onChange={(e) => {
                if (e.target.value.length > 1) {
                  e.target.value = e.target.value[0];
                }

                setPin(pin + e.target.value);
                e.target.value.length === 1
                  ? e.target.focus()
                  : e.target.previousSibling.focus();
              }}
              type="number"
              minLength={0}
              maxLength={1}
              className="w-10 h-14 text-2xl text-center text-blue-400 border-2 rounded-md border-blue-400 focus:outline-none focus:shadow-[0px_0px_8px_0px_#4fd1c5] caret-transparent"
            />
          </div>

          <div className="mt-10 flex justify-center">
            <button onClick={handleChange} className="button-primary w-72">
              Change PIN
            </button>
          </div>
        </div>
      </main>

      <footer>
        <FooterAfterLogin />
      </footer>
    </div>
  );
}
