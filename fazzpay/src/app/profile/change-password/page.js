"use client"
import React, { useState } from "react";
import Header from "../../../components/Header";
import MainMenu from "../../../components/MainMenu";

import { FiLock } from "react-icons/fi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function ChangePassword() {

    const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <div className="bg-[#e5e5e5]">
      <header className="px-10 py-6 bg-white">
        <Header />
      </header>
      <main className="flex mb-10">
        <aside className="hidden lg:block">
          <MainMenu />
        </aside>
        <div className="main-content">
          <h4 className="font-bold text-start">Change Password</h4>
          <p className="text-sm text-slate-400 w-80 mt-5">
            You must enter your current password and then type your new password
            twice.
          </p>
          <div>
          <div className="flex">
            <FiLock className="text-white lg:text-slate-400" size={20} />
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="focus:outline-0 w-full bg-transparent active:border-none active:outline-none"
            />
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
          </div>
        </div>
      </main>
    </div>
  );
}
