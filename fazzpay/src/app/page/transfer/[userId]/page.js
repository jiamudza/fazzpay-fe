"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import HeaderAfterLogin from "@/app/components/HeaderAfterLogin";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function TransferAmount() {
  const pathName = usePathname();
  const userId = pathName.split("/page/transfer/");
  const router = useRouter();
  const [data, setData] = useState({});
  const [user, setUser] = useState({})

  useEffect(() => {
    axios
      .get(`https://fazz.adaptable.app/api/v1/user/${userId[1]}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        err;
      });
  }, [pathName]);

  useEffect(() => {
    axios.get(`https://fazz.adaptable.app/api/v1/user/${JSON.parse(localStorage.getItem('@fazzLogin')).user.user_id}`)
    .then(res => {
      setUser(res.data.data)
    }).catch(err => err)
  }, [localStorage])

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const [paymentDetail, setPaymentDetail] = useState({});
  const [valid, setValid] = useState();

  const handelPayment = (e) => {
    e.preventDefault();

    if (paymentDetail.amount === 0 || paymentDetail === "undefined") {
      setValid(false);
    } else {
      setValid(true);
    }

    if (valid === true) {
      sessionStorage.setItem("@session", JSON.stringify(paymentDetail));
      router.push(`/page/transfer/detail/${userId[1]}`);
    } else {
      router.push(`/page/transfer/${userId[1]}`);
    }
  };

  return (
    <div>
      <div className="mt-2 px-2 bg-slate-400">
        <HeaderAfterLogin />
      </div>
      <div className="w-full px-10 mx-auto">
        <p className="font-bold text-2xl text-center">Transfer Money</p>

        <div className="mx-auto">
          <div className="mt-5 flex items-center gap-5">
            <Image
              src={data.user_image}
              alt="user(receiver)-image"
              width={100}
              height={100}
              className="h-10 w-10 rounded-lg bg-primary"
            />
            <div>
              <p className="font-bold">{`${data.first_name} ${data.last_name}`}</p>
              <p className="text-sm text-slate-400">{data.phone}</p>
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
              valid != false
                ? "hidden"
                : "transition-transform duration-150 block" +
                  " text-center fail-shadow px-5 py-2 mt-5 rounded-lg w-60 mx-auto font-nunito text-red-500"
            }
          >
            Transfer amount is not valid
          </p>
          <input
            onChange={(e) => {
              setPaymentDetail({
                ...paymentDetail,
                name: `${data.first_name} ${data.last_name}`,
                phone: data.phone,
                date: new Date(),
                amount: parseInt(e.target.value),
                image: data.user_image,
                balance: (user.balance - e.target.value)
              });
            }}
            type="number"
            className="text-4xl text-primary font-bold py-1 outline-none  focus:outline-0 mt-5 border-b-2 w-40 text-center block mx-auto"
            placeholder="0.00"
          />
          <p className="text-center font-bold block mx-auto mt-10">
            {rupiah(user.balance)} is Available
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

        <button
          onClick={handelPayment}
          className={
            valid === true
              ? "button-primary mx-auto mt-10 flex items-center justify-center content-center"
              : "button-primary bg-blue-400 mx-auto mt-10 flex items-center justify-center content-center"
          }
        >
          Continue
        </button>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}