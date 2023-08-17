'use client'
import React, { useEffect, useState } from "react";

//icons
import { RxDashboard } from "react-icons/rx";
import { RxPerson } from "react-icons/rx";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Link from "next/link";
import {deleteCookie} from 'cookies-next'

//utils
import { usePathname } from "next/navigation";
import axios from "axios";

export default function MainMenu() {
  const pathname = usePathname();

  // const [active, setActive] = useState(pathname)
  const [user, setUser] = useState({})
  const [topup, setTopup] = useState(false);
  const [topupAmount, setTopupAmount] = useState(0);
  const [pinBox, setPinBox] = useState(false);
  const [pin, setPin] = useState();
  const [successBox, setSuccessBox] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('@fazzLogin')) {
      setUser(JSON.parse(localStorage.getItem('@fazzLogin')).user)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setTopup(false);
    setPinBox(true);
  };

  const handleInputTopup = (e) => {
    e.preventDefault();
    setTopupAmount(parseInt(e.target.value));
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (parseInt(pin) === parseInt(user.pin)) {
      axios
        .patch(
          `https://fazz.adaptable.app/api/v1/user/topup/${
            JSON.parse(localStorage.getItem("@fazzLogin")).user.user_id
          }`,
          {
            balance: topupAmount,
          }
        )
        .catch((err) => {
          `${err}`;
        });

      setSuccessBox(true);
    } else if (parseInt(pin) !== parseInt(user.data.pin))
      alert("your pin is not valid");

    setPinBox(false);
  };

  return (
    <div className="font-nunito bg-white mx-10 px-10 py-5 rounded-xl shadow-xl my-10 w-72">
      <div
        className={
          pathname.includes("home") === true
            ? "text-primary font-bold flex gap-3 my-10 cursor-pointer"
            : "text-slate-500 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer"
        }
      >
        <RxDashboard size={20} />
        <Link href="/home">Dashboard</Link>
      </div>
      <div
        className={
          pathname.includes("transfer") === true
            ? "text-primary font-bold flex gap-3 my-10 cursor-pointer"
            : "text-slate-500 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer"
        }
      >
        <AiOutlineArrowUp size={20} />
        <Link href="/transfer">Transfer</Link>
      </div>
      <div
        onClick={() => {
          setTopup(true);
        }}
        className={
          topup === true
            ? "text-primary font-bold flex gap-3 my-10 cursor-pointer"
            : "text-slate-500 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer"
        }
      >
        <AiOutlinePlus size={20} />
        <p>Top up</p>
      </div>
      <div
        className={
          pathname.includes("profile") === true
            ? "text-primary font-bold flex gap-3 my-10 cursor-pointer"
            : "text-slate-500 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer"
        }
      >
        <RxPerson size={20} />
        <Link href="/profile">Profile</Link>
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          deleteCookie('login')
          localStorage.removeItem("@fazzLogin");
        }}
        className="text-slate-500 mt-40 font-semibold flex gap-3 my-10 hover:text-blue-300 cursor-pointer"
      >
        <CiLogout size={20} />
        <Link href="/">Logout</Link>
      </div>

      <div
        className={
          topup === false
            ? "hidden"
            : "block" +
              " py-10 bg-white grid w-80 px-10 inset-center rounded-lg shadow-xl"
        }
      >
        <p
          onClick={() => {
            setTopup(false);
          }}
          className="bg-red-500 w-5 text-center absolute right-0 rounded-tr-lg hover:bg-white border-3 border-transparent  hover:text-red-500 hover:border-3 cursor-pointer hover:border-red-500 text-white inline"
        >
          x
        </p>
        <p className="font-bold">Topup</p>
        <p className="mt-2 text-slate-400 w-full">
          Enter the amount of money and click submit.{" "}
        </p>

        <div className="flex gap-2 mt-3">
          <input
            onChange={handleInputTopup}
            type="number"
            minLength={0}
            maxLength={10}
            className="w-full h-10 text-2xl text-center text-blue-400 border-2 rounded-md border-blue-400 focus:outline-none focus:shadow-[0px_0px_8px_0px_#4fd1c5] caret-transparent"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="border float-right bg-primary py-2 rounded-lg font-semibold text-white hover:bg-white hover:border hover:border-primary ease-in-out duration-100 hover:text-primary active:scale-95 w-20 mt-5"
        >
          Submit
        </button>
      </div>

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

      <div
        className={
          successBox === false
            ? "hidden"
            : "block" +
              " py-10 bg-white grid px-10 inset-center rounded-lg shadow-xl"
        }
      >
        <BsFillCheckCircleFill
          size={50}
          color={"green"}
          className="text-center mx-auto"
        />
        <p className="text-bold ">Topup Successfully</p>
        <button onClick={()=> {
          setSuccessBox(false)
        }} className="button-primary mt-5">
          Ok
        </button>
      </div>
    </div>
  );
}
