"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

import Link from "next/link"
import axios from "axios"
export default function BalanceCard() {
    const segment = usePathname();
    const id = segment.split("/")[2];

    const [userById, setUserById] = useState([])

    axios.get(`http://localhost:5000/api/users/${id}`)
    .then(res => {
        // console.log(res.data.data)
        setUserById(res.data.data)
    })
    .catch(err => console.err)
  return (
    
    <div className="text-slate-400 w-full bg-indigo-600 px-20 py-5 flex justify-between rounded-md content-center">
        <div className="flex flex-col align-middle">
            <p>Balance</p>
            <p className="text-white text-4xl font-semibold py-5">{userById.balance}</p>
            <p>{userById.phone}</p>
        </div>

        <div className="text-white font-semibold">
            <Link className="block mb-3 bg-slate-400 px-5 py-3 rounded-md border border-white" href={(`/transfer/${id}`)}>Transfer</Link>
            <Link className="block mb-3 bg-slate-400 px-5 py-3 rounded-md border border-white" href={(`/topup/${id}`)}>Top Up</Link>
        </div>
    </div>
  )
}
