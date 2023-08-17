"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import MainMenu from "../../../app/components/MainMenu";
import Header from "../../../app/components/Header";
import FooterAfterLogin from "../../../app/components/FooterAfterLogin";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../../redux/action/userById";

export default function TransferAmount() {
  const pathName = usePathname();
  const userId = pathName.split("/transfer/");
  const router = useRouter();
  // const [data, setData] = useState({});
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  const { data } = useSelector((state) => state.userDataById);

  useEffect(() => {
    axios
      .get(`https://fazz.adaptable.app/api/v1/user/${userId[1]}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => err);
  }, []);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const [paymentDetail, setPaymentDetail] = useState({});
  const [valid, setValid] = useState();
  const [amountError, setAmountError] = useState(false);

  const handelPayment = (e) => {
    e.preventDefault();
    if (parseInt(paymentDetail.amount) > parseInt(data.balance)) {
      setAmountError(true);
    } else {
      sessionStorage.setItem("@session", JSON.stringify(paymentDetail));
      router.push(`/transfer/detail/${userId[1]}`);
    }
  };

  useEffect(() => {
    if (
      typeof paymentDetail.amount === "undefined" ||
      typeof paymentDetail.amount === NaN
    ) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, []);

  return (
    <div className="bg-[#e5e5e5]">
      <div className="px-10 py-6 bg-white">
        <Header />
      </div>
      <div className="flex">
        <aside className="hidden lg:block">
          <MainMenu />
        </aside>
        <div className="p-10 w-full m-10 bg-white rounded-xl shadow-xl">
          <p className="font-bold text-2xl text-center">Transfer Money</p>

          <div className="mx-auto">
            <div className="mt-5 flex items-center gap-5">
              {user.user_image && (
                <Image
                  src={user.user_image}
                  alt="user(receiver)-image"
                  width={100}
                  height={100}
                  className="h-10 w-10 rounded-lg bg-primary"
                />
              )}
              <div>
                <p className="font-bold">{`${user.first_name} ${user.last_name}`}</p>
                <p className="text-sm text-slate-400">{user.phone}</p>
              </div>
            </div>
          </div>

          <p className="text-slate-600 mt-5">
            Type the amount you want to transfer and then press continue to the
            next steps.
          </p>

          <div className="w-full mx-auto">
          <p
              className={
                (amountError !== true ? "invisible" : "visible") +
                " font-semibold text-red-400 bg-red-200 px-10 py-2 rounded-lg mt-5"
              }
            >*You don't have enough money to transfer</p>
            <p
              className={
                (error !== true ? "invisible" : "visible") +
                " font-semibold text-red-400 bg-red-200 px-10 py-2 rounded-lg mt-5"
              }
            >
              *Transfer amount is not valid
            </p>
            <input
              onChange={(e) => {
                setAmountError(false);
                setPaymentDetail({
                  ...paymentDetail,
                  name: `${user.first_name} ${user.last_name}`,
                  phone: user.phone,
                  date: new Date(),
                  amount: e.target.value,
                  image: user.user_image,
                  balance: user.balance - e.target.value,
                });

                if (e.target.value.length === 0) setValid(false);
                if (e.target.value.length > 0) {
                  setError(false);
                  setValid(true);
                }
              }}
              type="number"
              className="text-4xl text-primary font-bold py-1 outline-none  focus:outline-0 mt-5 border-b-2 w-40 text-center block mx-auto"
              placeholder="0.00"
            />
            <p className="text-center font-bold block mx-auto mt-10">
              {rupiah(data.balance)} is Available
            </p>

            <input
              onChange={(e) => {
                setPaymentDetail({
                  ...paymentDetail,
                  notes: e.target.value,
                });
              }}
              type="text"
              className="w-100 p-2 focus:outline-0 overflow-y-auto border-b block mx-auto mt-5 border-slate-500 text-center"
              placeholder="Add some notes here"
            />
          </div>

          {valid === true ? (
            <button
              onClick={handelPayment}
              className="button-primary mx-auto mt-10 flex items-center justify-center content-center"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                setError(true);
              }}
              className="border bg-blue-200 px-6 py-2 rounded-lg font-semibold text-white ease-in-out duration-100 mx-auto mt-10 flex items-center justify-center content-center cursor-default"
            >
              Continue
            </button>
          )}
        </div>
      </div>
      <div className="mt-20">
        <FooterAfterLogin />
      </div>
    </div>
  );
}
