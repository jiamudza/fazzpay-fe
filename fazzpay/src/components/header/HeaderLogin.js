
import React from "react";

import Link from "next/link";
export default function HeaderLogin() {
  return (
    <div>
      <header className="flex justify-between mx-20">
        <p className="font-bold text-2xl text-primary text-nunito">Fazzpay</p>
        <div className="lg:block sm:none">
          <Link href='page/auth/login' className="border border-primary px-6 py-2 rounded-xl font-semibold text-primary mx-2 hover:border-transparent ease-in-out duration-100 hover:bg-primary hover:text-white active:scale-95">
            Login
          </Link>
          <button className="border bg-primary px-6 py-2 rounded-xl font-semibold text-white hover:bg-white hover:border hover:border-primary ease-in-out duration-100 hover:text-primary mx-2 active:scale-95">
            Sign Up
          </button>
        </div>
      </header>
    </div>
  );
}
