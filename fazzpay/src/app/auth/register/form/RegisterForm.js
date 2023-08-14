"use client";
import React, { useEffect, useState } from "react";

//icon
import { GoMail, GoPerson } from "react-icons/go";
import { FiLock } from "react-icons/fi";

import { useRouter } from "next/navigation";
import axios from "axios";
import LoginForm from "../../login/form/LoginForm";
export default function RegisterForm() {
  const router = useRouter();

  const fazzPay = "https://fazz.adaptable.app/api/v1";
  const [registForm, setRegistForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [registError, setRegistError] = useState(false);

  const register = (e) => {
    e.preventDefault();
    if (
      registForm.firstName.length === 0 ||
      registForm.lastName.length === 0 ||
      registForm.email.length === 0 ||
      registForm.password.length === 0
    ) {
      setRegistError(true);
    } else {
      sessionStorage.setItem('fazzRegister', JSON.stringify(registForm))
      router.push(`/auth/set-pin`)
    }
  };

  useEffect(() => {
    if(sessionStorage.getItem('fazzRegister')) {
        router.push('/auth/set-pin')
    }
  }, [router])
  return (
    <div className="bg-primary text-white lg:bg-white lg:text-black px-5 pt-10 h-screen">
      <p className="font-bold text-xl">
        Start Accessing Banking Needs With All Devices and All Platforms With
        30.000+ Users
      </p>
      <p className="mt-10">
        Transfering money is eassier than ever, you can access FazzPay wherever
        you are. Desktop, laptop, mobile phone? we cover all of that for you!
      </p>
        <p className={registError == true ? 'opacity-100' + " shake text-sm text-red-400 px-5 py-4 font-bold" :'hidden'}>*Every column must be filled in first </p>
      <form className="mt-3">
        <div className="flex gap-x-2 content-center border-b lg:border-primary py-3">
          <GoPerson className="text-white lgtext-primary" size={20} />
          <input
            onChange={(e) => {
              setRegistForm({
                ...registForm,
                firstName: e.target.value,
              });

              setRegistError(false)
            }}
            type="text"
            placeholder="Enter your firstname"
            className="text-sm focus:outline-0 w-full bg-transparent active:border-none active:outline-none "
          />
        </div>
        <div className="flex gap-x-2 content-center border-b lg:border-primary py-3 mt-5">
          <GoPerson className="text-white lg:text-primary" size={20} />
          <input
            onChange={(e) => {
              setRegistForm({
                ...registForm,
                lastName: e.target.value,
              });
              setRegistError(false)
            }}
            type="text"
            placeholder="Enter your lastname"
            className="text-sm focus:outline-0 w-full bg-transparent active:border-none active:outline-none "
          />
        </div>
        <div className="flex gap-x-2 content-center border-b lg:border-primary py-3 mt-5">
          <GoMail className="text-white lg:text-primary" size={20} />
          <input
            onChange={(e) => {
              setRegistForm({
                ...registForm,
                email: e.target.value,
              });
              setRegistError(false)
            }}
            type="text"
            placeholder="Enter your e-mail"
            className="text-sm focus:outline-0 w-full bg-transparent active:border-none active:outline-none bg-white "
          />
        </div>
        <div className="flex gap-x-2 content-center border-b lg:border-primary py-3 mt-5">
          <FiLock className="text-white lg:text-primary" size={20} />
          <input
            onChange={(e) => {
              setRegistForm({
                ...registForm,
                password: e.target.value,
              });
              setRegistError(false)
            }}
            type="password"
            placeholder="Enter your password"
            className="text-sm bg-white w-full bg-transparent active:border-none focus:outline-none "
          />
        </div>

        <button
          onClick={register}
          className="border border-primary lg:border-white bg-white lg:bg-primary w-full py-2 rounded-lg font-semibold text-primary lg:text-white hover:bg-primary lg:hover:bg-white hover:border hover:border-white lg:hover:border-primary ease-in-out duration-100 hover:text-white lg:hover:text-primary active:scale-95 px-10 mt-5 text-center"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-5 text-center">
        Already have an account? lets{" "}
        <span onClick={() => router.push('/auth/login')} className="lg:text-primary font-bold">Login</span>
      </p>
    </div>
  );
}
