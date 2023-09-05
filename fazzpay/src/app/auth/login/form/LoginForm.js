"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"

//icon
import { GoMail } from "react-icons/go";
import { FiLock } from "react-icons/fi";

import { useRouter } from "next/navigation";
import axios from "axios";
import { setCookie } from "cookies-next";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
export default function LoginForm() {
  const router = useRouter();

  const fazzPay = "https://fazz.adaptable.app/api/v1";
  const [loginForm, SetLoginForm] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState({
    status: "false",
  });

  const [authError, setAuthError] = useState(false);

  const login = (e) => {
    e.preventDefault();

    axios({
      url: `${fazzPay}/auth/login`,
      method: "POST",
      data: loginForm,
    })
      .then((res) => {
        setCookie("login", true);
        localStorage.setItem("@fazzLogin", JSON.stringify(res.data.data));
        router.push("/home");
      })
      .catch((err) => {
        setAuthError(true);
        setLoginError({
          ...loginError,
          status: "true",
          error: `${err.response}`,
        });
        console.log(loginError);
      });

    if (localStorage.getItem("@fazzLogin")) {
      router.push("/home");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("@fazzLogin")) router.push("/home");
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="bg-primary px-5 pt-5 text-white h-screen lg:bg-white lg:px-0 lg:pt-5 lg:text-black">
      <p className="font-bold text-xl">
        Start Accessing Banking Needs With All Devices and All Platforms With
        30.000+ Users
      </p>
      <p className="mt-10">
        Transfering money is eassier than ever, you can access FazzPay wherever
        you are. Desktop, laptop, mobile phone? we cover all of that for you!
      </p>
      <p
        className={
          (authError === true ? "visible" : "invisible") +
          " font-semibold text-red-400 bg-red-200 mt-5 px-10 py-2 rounded-lg"
        }
      >
        *You have entered an invalid username or password
      </p>
      <form className="mt-5 px-10">
        <div className="flex gap-2 items-center content-center border-b py-3">
          <GoMail className="text-white lg:text-slate-400" size={20} />
          <input
            onChange={(e) => {
              setAuthError(false);
              SetLoginForm({
                ...loginForm,
                email: e.target.value,
              });
            }}
            type="text"
            placeholder="Enter your e-mail"
            className="focus:outline-0 w-full bg-transparent active:border-none active:outline-none"
          />
        </div>
        <div className="flex items-center justify-between border-b py-3 mt-10">
          <div className="flex gap-2 items-center">
            <FiLock className="text-white lg:text-slate-400" size={20} />
            <input
              onChange={(e) => {
                setAuthError(false);
                SetLoginForm({
                  ...loginForm,
                  password: e.target.value,
                });
              }}
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="focus:outline-0 w-full bg-transparent active:border-none active:outline-none"
            />
          </div>
          {passwordVisible ? (
            <AiFillEyeInvisible
              onClick={() => setPasswordVisible(false)}
              size={20}
              className="text-slate-400"
            />
          ) : (
            <AiFillEye
              onClick={() => setPasswordVisible(true)}
              size={20}
              className="text-slate-400"
            />
          )}
        </div>
        <Link href="/auth/reset-password"
          className="font-bold text-end mt-3 cursor-pointer"
        >
          Forgot Passoword?
        </Link>

        <button
          onClick={login}
          className="border border-primary lg:border-white bg-white lg:bg-primary w-full py-2 rounded-lg font-semibold text-primary lg:text-white hover:bg-primary lg:hover:bg-white hover:border hover:border-white lg:hover:border-primary ease-in-out duration-100 hover:text-white lg:hover:text-primary active:scale-95 px-10 mt-5 text-center"
        >
          Login
        </button>
      </form>

      <p className="mt-5 text-center">
        Do not have an account? lets{" "}
        <span
          onClick={() => router.push("/auth/register")}
          className="text-white lg:text-primary font-bold cursor-pointer"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}
