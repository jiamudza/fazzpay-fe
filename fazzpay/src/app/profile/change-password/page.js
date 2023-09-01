"use client";
import React, { useState, useEffect } from "react";
import Header from "../../../components/Header";
import MainMenu from "../../../components/MainMenu";
import FooterAfterLogin from "../../../components/FooterAfterLogin";

import { FiLock } from "react-icons/fi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function ChangePassword() {
  const router = useRouter();
  const { data } = useSelector((state) => state.userDataById);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState({});
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    if (data != "undefined") {
      setPassword({
        ...password,
        userId: data.user_id,
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.newPassword.length < 8) {
      setError(true);
      setErrMessage("password length must be of 8-15 characters");
    } else {
      axios({
        url: `http://localhost:5000/api/v1/auth/update-password`,
        method: "PATCH",
        data: password,
      })
        .then((res) => {
          router.push("/profile");
        })
        .catch((err) => {
          setError(true);
          setErrMessage(err.response.data.message);
        });
    }
  };

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
          <p
            className={
              (error === true ? "visible" : "invisible") +
              " font-semibold text-red-400 bg-red-200 px-10 py-2 rounded-lg mt-5"
            }
          >
            *{errMessage}
          </p>
          <form onSubmit={handleSubmit} className="">
            <div className="flex items-center w-80 mt-10 mx-auto">
              <div className="flex items-center gap-2 border-b">
                <FiLock className="text-white lg:text-slate-400" size={20} />
                <input
                  onChange={(e) => {
                    setPassword({
                      ...password,
                      current: e.target.value,
                    });
                    setError(false);
                  }}
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter current password"
                  name="current"
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
            <div className="flex items-center w-80 mt-10 mx-auto">
              <div className="flex items-center gap-2 border-b">
                <FiLock className="text-white lg:text-slate-400" size={20} />
                <input
                  onChange={(e) => {
                    setPassword({
                      ...password,
                      newPassword: e.target.value,
                    });
                    setError(false);
                  }}
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter new password"
                  name="new"
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
            <div className="flex items-center w-80 mt-10 mx-auto">
              <div className="flex items-center gap-2 border-b">
                <FiLock className="text-white lg:text-slate-400" size={20} />
                <input
                  onChange={(e) => {
                    setPassword({
                      ...password,
                      confirmNewPassword: e.target.value,
                    });
                    setError(false);
                  }}
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Re-Enter new password"
                  name="renew"
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

            <div className="flex justify-center">
              <input
                type="submit"
                value={"Change Password"}
                className="button-primary cursor-pointer mt-10"
              />
            </div>
          </form>
        </div>
      </main>
      <footer>
        <FooterAfterLogin />
      </footer>
    </div>
  );
}
