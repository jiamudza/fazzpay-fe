import Image from "next/image";
import React from "react";

// assets
import phone from "../../../assets/img/png-phone.png";
import phone2 from "../../../assets/img/png-phone2.png";
import RegisterForm from "./form/RegisterForm";
export default function Register() {
  return (
    <div className="flex max-h-screen">
      <div className="text-white p-10 bg-primary flex-1">
        <h1 className="text-2xl font-bold">Fazzpay</h1>
        <div className="grid justify-items-center">
          <Image
            src={phone}
            className="absolute object-contain -rotate-12 origin-bottom h-[60vh]"
            alt="phone"
            priority='true'
          />
          <Image
            src={phone2}
            className="object-contain rotate-12 origin-bottom h-[60vh]"
            alt="phone2"
            priority=''
          />
        </div>
        <div className="px-28">
          <p className="font-bold mt-5 text-center">
            App that Covering Banking Needs.
          </p>
          <p className="text-center mt-5 ">
            FazzPay is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in FazzPay everyday with worldwide
            users coverage.
          </p>
        </div>
      </div>
      <div className="flex-1 px-5 mt-10">
        <RegisterForm />
      </div>
    </div>
  );
}
