"use client";
import axios from "axios";
import React, { useState } from "react";
import { GoMail } from "react-icons/go";

import { useRouter } from "next/navigation";

export default function FgPassword() {
    const router = useRouter()

  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
        url: `https://fazz.adaptable.app/api/v1/auth/forgotpassword`,
        method: "POST",
        data: {email}
    })
    .then(res => 
        {   
          console.log(res)
            setError(false);
            // router.push('/auth/reset-password/email-success')
        })
    .catch(err => {
      console.log(err)
        setError(true)
        setErrorMessage(err)
    })

  };

  return (
    <div className="bg-primary mt-0 px-5 pt-5 text-white h-screen lg:bg-white lg:px-0 lg:pt-5 lg:text-black lg:mt-10">
      <p className="font-bold text-xl w-80">
        Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password
        In a Minutes.
      </p>
      <p className="mt-5 text-sm text-slate-400 w-3/4">
        To reset your password, you must type your e-mail and we will send a
        link to your email and you will be directed to the reset password
        screens.
      </p>

      <p
        className={
          (error ? "visible" : "invisible") +
          " font-semibold text-red-400 bg-red-200 mt-5 px-10 py-2 rounded-lg"
        }
      >
        *{"error"}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col w-full mt-20">
        <div className="flex gap-2 items-center border-b-2 w-3/4">
          <GoMail className="text-white lg:text-slate-400" size={25} />
          <input
          onChange={(e) => {
            setEmail(e.target.value),
            setError(false)
          }}
            type="email"
            name="email"
            className="w-full focus:outline-0 py-2"
          />
        </div>

        <div className="flex justify-center">
          <input
            type="submit"
            value={"Submit"}
            className="button-primary mt-10 w-80"
          />
        </div>
      </form>
    </div>
  );
}
