"use client";
import FooterAfterLogin from "../../components/FooterAfterLogin";
import MainMenu from "../../components/MainMenu";
import Link from "next/link";
import axios from "axios";

//icons
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Image from "next/image";

import placeholder from "../../assets/img/placeholder.jpg";
import { getUserById } from "../../redux/action/userById";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getHistoryById } from "../../redux/action/history";
import rupiah from "../../utils/balanceFormat";
import Header from "../../components/Header";
import { useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BarChart from './BarChart'

export default function Home() {
  const router = useRouter();
  const [income, setIncome] = useState(true);

  const [user, setUser] = useState({});
  const [topup, setTopup] = useState(false);
  const [topupAmount, setTopupAmount] = useState(0);
  const [pinBox, setPinBox] = useState(false);
  const [pin, setPin] = useState();
  const [successBox, setSuccessBox] = useState(false);
  const [history, sethistory] = useState({});

  // get id  by localStorage
  const [id, setId] = useState("");
  useEffect(() => {
    if (localStorage.getItem("@fazzLogin")) {
      setId(JSON.parse(localStorage.getItem("@fazzLogin")).user.user_id);
      setUser(JSON.parse(localStorage.getItem("@fazzLogin")).user);
    } else {
      router.push("/auth/login");
    }
  }, [router]);

  useEffect(() => {
    axios
      .get(`https://fazz.adaptable.app/api/v1/transaction/` + id)
      .then((res) => {
        sethistory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // get data user by id
  const { data } = useSelector((state) => state.userDataById);
  // const { history } = useSelector((state) => state.historyById);

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

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getHistoryById(id));
  // }, [id, dispatch]);
  return (
    <div className="bg-[#e5e5e5]">
      <header className="px-10 py-6 bg-white sticky top-0">
        <Header />
      </header>
      <main className="flex mb-10">
        <div className="hidden md:block">
          <MainMenu />
        </div>
        <div></div>
        <div id="content" className="w-full mt-10 mx-10">
          <div className="text-white bg-primary p-5 rounded-xl flex justify-between items-center px-5">
            <div>
              <p>Balance</p>
              <h3 className="text-bold text-2xl">
                {data.balance ? (
                  "Rp" + rupiah(parseInt(data.balance))
                ) : (
                  <Skeleton baseColor="aquamarine" />
                )}
              </h3>
              <p className="text-sm">
                {data.phone ? data.phone : <Skeleton baseColor="aquamarine" />}
              </p>
            </div>

            <div>
              <button className=" bg-slate-200 w-32 bg-opacity-60 outline outline-white rounded-lg flex justify-between gap-2 py-2 px-3 outline-1 hover:bg-blue-300 active:scale-95 duration-200 ease-in-out">
                <AiOutlineArrowUp size={25} className="text-slate-500" />
                <Link href="/transfer" className="font-bold">
                  Transfer
                </Link>
              </button>
              <button
                onClick={() => {
                  setTopup(true);
                }}
                className=" bg-slate-200 w-32 bg-opacity-60 outline outline-white rounded-lg flex justify-between gap-2 py-2 px-3 outline-1 hover:bg-blue-300 active:scale-95 duration-200 ease-in-out mt-5"
              >
                <AiOutlinePlus size={25} className="text-slate-500" />
                <p className="font-bold">Top Up</p>
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
                  <p className="font-bold text-xl">
                    Rp{history && history.income ? rupiah(history.income) : 0}
                  </p>
                </div>
                <div>
                  <AiOutlineArrowUp
                    size={20}
                    className="text-red-600 mx-auto"
                  />
                  <p>Expense</p>
                  <p className="font-bold text-xl">
                    Rp{history && history.expense ? rupiah(history.expense) : 0}
                  </p>
                </div>
              </div>

              <div className="">Traffic</div>
              <BarChart />
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
              {income === true ? (
                history && history.data ? (
                  history.data.map((item, index) => {
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
                              src={
                                item.user_image === null
                                  ? placeholder
                                  : item.user_image
                              }
                              width={200}
                              height={200}
                              className="w-10 h-10 bg-primary rounded-lg mt-5"
                            />
                            <div className="mt-4">
                              <p className="text-sm">
                                {item.first_name ? (
                                  item.first_name
                                ) : (
                                  <Skeleton />
                                )}
                              </p>
                              <p className="text-sm text-slate-400">
                                {item.sender_number}
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
                ) : (
                  <div className="flex items-center">
                    <Skeleton />
                  </div>
                )
              ) : (
                history &&
                history.data ? history.data.map((item, index) => {
                  if (
                    item.user_id === item.receiver_id &&
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
                            src={
                              item.user_image === null
                                ? placeholder
                                : item.user_image
                            }
                            width={200}
                            height={200}
                            className="w-10 h-10 bg-primary rounded-lg mt-5"
                          />
                          <div className="mt-4">
                            <p className="text-sm">{item.first_name}</p>
                            <p className="text-sm text-slate-400">
                              {item.receiver_number}
                            </p>
                          </div>
                        </div>
                        <p className="font-bold text-red-500">
                          -Rp{rupiah(item.amount)}
                        </p>
                      </div>
                    )
                  }
                }) : <div>
                  <Skeleton />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
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
        <button
          onClick={() => {
            setSuccessBox(false);
          }}
          className="button-primary mt-5"
        >
          Ok
        </button>
      </div>

      <FooterAfterLogin />
    </div>
  );
}
