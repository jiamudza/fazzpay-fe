"use client";
import FooterAfterLogin from "../components/FooterAfterLogin";
import MainMenu from "../components/MainMenu";
import Link from "next/link";

//icons
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import Image from "next/image";

import placeholder from "../../assets/img/placeholder.jpg"
import { getUserById } from "../../redux/action/userById";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getHistoryById } from "../../redux/action/history";
import { rupiah } from "../../utils/balanceFormat";
import Header from "../components/Header";


export default function Home() {
  const [income, setIncome] = useState(true);

  // get id  by localStorage
  const [id, setId] = useState("");

  // get data user by id
  const { data } = useSelector((state) => state.userDataById)
  const { history } = useSelector(state => state.historyById)
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem("@fazzLogin")) {
      setId(JSON.parse(localStorage.getItem("@fazzLogin")).user.user_id);
    }
    dispatch(getUserById(id))
    dispatch(getHistoryById(id))
  }, [])

  return (
    <div className="bg-[#e5e5e5]">
      <header className="px-10 py-6 bg-white sticky top-0">
        <Header />
      </header>
      <main className="flex mb-10">
        <div className="hidden md:block">
          <MainMenu />
        </div>
        <div id="content" className="w-full mt-10 mx-10">
          <div className="text-white bg-primary p-5 rounded-xl flex justify-between items-center px-5">
            <div>
              <p>Balance</p>
              <h3 className="text-bold text-2xl">Rp{rupiah(data.balance)}</h3>
              <p className="text-sm">{data.phone}</p>
            </div>

            <div>
              <button className=" bg-slate-200 w-32 bg-opacity-60 outline outline-white rounded-lg flex justify-between gap-2 py-2 px-3 outline-1 hover:bg-blue-300 active:scale-95 duration-200 ease-in-out">
                <AiOutlineArrowUp size={25} className="text-slate-500" />
                <Link href="/transfer" className="font-bold">
                  Transfer
                </Link>
              </button>
              <button className=" bg-slate-200 w-32 bg-opacity-60 outline outline-white rounded-lg flex justify-between gap-2 py-2 px-3 outline-1 hover:bg-blue-300 active:scale-95 duration-200 ease-in-out mt-5">
                <AiOutlinePlus size={25} className="text-slate-500" />
                <Link href="/topup" className="font-bold">
                  Top Up
                </Link>
              </button>
            </div>
          </div>

          <div className="lg:flex justify-between mt-10 gap-10">
            {/* traffic */}
            <div className="bg-white shadow-xl rounded-xl p-10  text-center flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <AiOutlineArrowDown
                    size={20}
                    className="text-green-600 mx-auto"
                  />
                  <p>Income</p>
                  <p className="font-bold text-xl">Rp2.200.000</p>
                </div>
                <div>
                  <AiOutlineArrowUp
                    size={20}
                    className="text-red-600 mx-auto"
                  />
                  <p>Expense</p>
                  <p className="font-bold text-xl">Rp2.200.000</p>
                </div>
              </div>

              <div className="h-40">Traffic</div>
            </div>

            {/* history */}
            <div className="bg-white rounded-xl shadow-xl h-80 mt-10 md:mt-0 overflow-y-auto">
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    setIncome(true);
                  }}
                  className={
                    income === true
                      ? "text-white bg-green-400 font-bold w-full py-3"
                      : "bg-white py-3 text-green-400 font-bold w-full"
                  }
                >
                  Income
                </button>
                <button
                  onClick={() => {
                    setIncome(false);
                  }}
                  className={
                    income === false
                      ? "text-white bg-red-400 font-bold w-full"
                      : "bg-white text-red-400 font-bold w-full"
                  }
                >
                  Expense
                </button>
              </div>
              <div className="flex gap-20 items-center justify-between px-10">
                <p className=" font-bold">Transaction History</p>
                <p className="text-small text-primary border-primary border-b py-1 px-2">
                  see all
                </p>
              </div>
              {income === true
                ? history &&
                  history.map((item, index) => {
                    if (
                      item.user_id === item.sender_id &&
                      id !== item.user_id
                    ) {
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between px-5"
                        >
                          <div className="flex justify-start gap-2 items-center">
                            <Image
                              alt="user-image"
                              src={item.user_image === null ? placeholder : item.user_image}
                              width={200}
                              height={200}
                              className="w-10 h-10 bg-primary rounded-lg mt-5"
                            />
                            <div>
                              <p className="text-sm">{`${item.first_name}`}</p>
                              <p className="text-sm text-slate-400">
                                {item.phone}
                              </p>
                            </div>
                          </div>
                          <p className="font-bold text-green-500">
                            +Rp{rupiah(item.amount)}
                          </p>
                        </div>
                      );
                    }
                  })
                : history &&
                  history.map((item, index) => {
                    if (
                      item.user_id === item.receiver_id &&
                      id !== item.user_id
                    ) {
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between px-5"
                        >
                          <div className="flex justify-center content-center items-center">
                            <Image
                              alt="user-image"
                              src={item.user_image === null ? placeholder : item.user_image}
                              width={200}
                              height={200}
                              className="w-10 h-10 bg-primary rounded-lg mt-5"
                            />
                            <div>
                              <p className="text-sm">{`${item.first_name}`}</p>
                              <p className="text-sm text-slate-400">
                                {item.phone}
                              </p>
                            </div>
                          </div>
                          <p className="font-bold text-red-500">
                            -Rp{rupiah(item.amount)}
                          </p>
                        </div>
                      );
                    }
                  })}
            </div>
          </div>
        </div>
      </main>

      <FooterAfterLogin />
    </div>
  );
}
