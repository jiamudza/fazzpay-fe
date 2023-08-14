"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";
export default function PinForm() {
  const router = useRouter();

  const fazzPay = "https://fazz.adaptable.app/api/v1";
  const [pin, setPin] = useState([]);
  const [register, setRegister] = useState({});

  useEffect(() => {
    if(sessionStorage.getItem('fazzRegister')) {
      setRegister(JSON.parse(sessionStorage.getItem('fazzRegister')))
    }
  }, [])


  const handleConfirm = (e) => {
    e.preventDefault();

    axios({
      url: `${fazzPay}/auth/register`,
      method: "POST",
      data: {
        ...register,
        pin
      }
    })
    .then(res => {
        router.push('/auth/login')
        sessionStorage.removeItem('fazzRegister')
    })
    .catch(err => console.log(err))
  };

  console.log(register);

  return (
    <div className="text-nunito text-white lg:text-black bg-primary lg:bg-white px-5 py-10 h-screen">
      <p className="font-bold text-xl">
        Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That
        You Created Yourself.
      </p>
      <p className="mt-10 w-80 text-small lg:text-slate-400">
        Create 6 digits pin to secure all your money and your data in FazzPay
        app. Keep it secret and don’t tell anyone about your FazzPay account
        password and the PIN.
      </p>
      <form className="mt-10">
        <div className="">
          <div className="flex justify-center gap-5 mt-3">
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
          <div className="flex justify-center">
          <button
            onClick={handleConfirm}
            className="border border-primary lg:border-white bg-white lg:bg-primary py-2 rounded-lg font-semibold text-primary lg:text-white hover:bg-primary lg:hover:bg-white hover:border hover:border-white lg:hover:border-primary ease-in-out duration-100 hover:text-white lg:hover:text-primary active:scale-95 px-10 mt-5 text-cente"
          >
            Confirm
          </button>
          </div>
        </div>
      </form>
    </div>
  );
}
