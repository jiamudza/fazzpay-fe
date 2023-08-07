'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

//icon
import { VscBell } from "react-icons/vsc";

export default function HeaderAfterLogin() {
const [user, setUser] = useState({})

useEffect(() => {
  if(localStorage.getItem('@fazzLogin')) {
    setUser(JSON.parse(localStorage.getItem('@fazzLogin')).user)
  }
})

  return (
    <div className="flex content-center justify-between bg-white">
      <p className="font-bold text-2xl text-primary">Fazzpay</p>
      <div>
        <div className="flex content-center gap-5 justify-between">
          <div className="flex content-center justify-between gap-3">
            <Image src={user.user_image} width={200} height={200} alt="user-image" className="h-10 w-10 rounded-lg bg-primary" />
            <div>
              <p className="font-bold">{`${user.first_name} ${user.last_name}`}</p>
              <p className="text-sm text-slate-400">{user.phone}</p>
            </div>
          </div>
          <div>
            <VscBell size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
