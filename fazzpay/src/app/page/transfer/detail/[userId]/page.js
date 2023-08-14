"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Image from "next/image";
import MainMenu from "@/app/components/MainMenu";
import Header from "@/app/components/Header";
import FooterAfterLogin from "@/app/components/FooterAfterLogin";

export default function Confirmation({ callback }) {
  const router = useRouter();
  const pathName = usePathname();
  const [user, setUser] = useState({
    data: {},
  });
  const [pin, setPin] = useState([]);

  const [userData, setUserData] = useState({});
  const userId = pathName.split(`/page/transfer/detail/`);

  useEffect(() => {
    if (localStorage.getItem("@fazzLogin")) {
      setUserData(JSON.parse(sessionStorage.getItem("@session")));
    } else {
      router.push(`/page/auth/login/`);
    }
  }, [router]);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const [pinBox, setPinBox] = useState(false);

  const handleContinue = () => {
    if (pinBox === false) setPinBox(true);
    if (pinBox === true) setPinBox(false);
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    if (parseInt(pin) === parseInt(user.data.pin)) {
      axios.post(`https://fazz.adaptable.app/api/v1/transaction/`, {
        senderId: JSON.parse(localStorage.getItem("@fazzLogin")).user.user_id,
        receiverId: userId[1],
        amount: parseInt(userData.amount),
      })
      .catch(err => {
        `ini ${err}`
      });
      router.push(`/page/transfer/success/`);
    } else if (parseInt(pin) !== parseInt(user.data.pin))
      alert("your pin is not valid");
    else if (userData.amount > user.data.balance)
      alert("you dont have enough balance on your wallet");

    setPinBox(false);
  };

  useEffect(() => {
    axios
      .get(
        `https://fazz.adaptable.app/api/v1/user/${
          JSON.parse(localStorage.getItem("@fazzLogin")).user.user_id
        }`
      )
      .then((res) => {
        setUser({
          ...user,
          data: res.data.data,
        });
      })
      .catch((err) => err);
  }, [user]);

  return (
    <div
      className={
        pinBox === true
          ? "overflow-hidden"
          : "overflow-visible" + " bg-[#e5e5e5]"
      }
    >
      <div className="px-10 py-6 bg-white">
        <Header />
      </div>
      <main className="flex">
        <div>
          <MainMenu />
        </div>
        <div className="m-10 p-10 rounded-xl shadow-2xl lg:w-full bg-white">
          <p className="font-bold">Transfer To</p>
          <div className="mt-5 flex items-center gap-5">
            {userData.image && (
              <Image
                src={userData.image}
                width={100}
                height={100}
                alt="receiver-image"
                className="h-10 w-10 rounded-lg bg-primary"
              />
            )}
            <div>
              <p className="font-bold">{userData.name}</p>
              <p className="text-sm text-slate-400">{userData.phone}</p>
            </div>
          </div>

          <p className="mt-5">Details</p>

          <div className="mt-5">
            <p className="text-slate-400 text-sm">Amount</p>
            <p className="font-bold">{rupiah(userData.amount)}</p>
          </div>
          <div className="mt-5">
            <p className="text-slate-400 text-sm">Balance Left</p>
            <p className="font-bold">{rupiah(userData.balance)}</p>
          </div>
          <div className="mt-5">
            <p className="text-slate-400 text-sm">Date & Time</p>
            <p className="font-bold">{userData.date}</p>
          </div>
          <div className="mt-5">
            <p className="text-slate-400 text-sm">Notes</p>
            <p className="font-bold">{userData.notes}</p>
          </div>

          <button
            onClick={handleContinue}
            className="button-primary mt-10 mx-auto relative right-0"
          >
            Continue
          </button>
          <div
            className={
              pinBox === false
                ? "hidden"
                : "block" +
                  " py-10 bg-white grid px-10 inset-center rounded-lg shadow-xl"
            }
          >
            <p
              onClick={() => {
                setPinBox(false);
              }}
              className="bg-red-500 w-5 text-center absolute right-0 rounded-tr-lg hover:bg-white border-3 border-transparent  hover:text-red-500 hover:border-3 cursor-pointer hover:border-red-500 text-white inline"
            >
              x
            </p>
            <p className="font-bold">Enter Pin for Confirmation</p>
            <p className="mt-2 text-slate-400 w-40">
              Enter your 6 digits PIN for confirmation to continue transferring
              money.{" "}
            </p>

            <div className="flex gap-2 mt-3">
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
                className="w-7 h-10 text-2xl text-center text-blue-400 border-2 rounded-md border-blue-400 focus:outline-none focus:shadow-[0px_0px_8px_0px_#4fd1c5] caret-transparent"
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
                className="w-7 h-10 text-2xl text-center text-blue-400 border-2 rounded-md border-blue-400 focus:outline-none focus:shadow-[0px_0px_8px_0px_#4fd1c5] caret-transparent"
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
                className="w-7 h-10 text-2xl text-center text-blue-400 border-2 rounded-md border-blue-400 focus:outline-none focus:shadow-[0px_0px_8px_0px_#4fd1c5] caret-transparent"
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
                className="w-7 h-10 text-2xl text-center text-blue-400 border-2 rounded-md border-blue-400 focus:outline-none focus:shadow-[0px_0px_8px_0px_#4fd1c5] caret-transparent"
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
                className="w-7 h-10 text-2xl text-center text-blue-400 border-2 rounded-md border-blue-400 focus:outline-none focus:shadow-[0px_0px_8px_0px_#4fd1c5] caret-transparent"
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
                className="w-7 h-10 text-2xl text-center text-blue-400 border-2 rounded-md border-blue-400 focus:outline-none focus:shadow-[0px_0px_8px_0px_#4fd1c5] caret-transparent"
              />
            </div>
            <button onClick={handleConfirm} className="button-primary mt-5">
              Confirm
            </button>
          </div>
        </div>
      </main>
      <div>
        <FooterAfterLogin />
      </div>
    </div>
  );
}
