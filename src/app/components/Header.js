"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
export default function Header() {

    const[isLogin, setIsLogin] = useState(false)
  return (
    <header className='px-20 py-10 shadow-lg w-full flex justify-between'>
        <h2 className='text-indigo-400 font-bold text-2xl inline'>FazzPay</h2>

        {isLogin ? <div>
            <image className="inline w-10 h-10 bg-black" />
            <p>+627787878</p>

        </div>: <div className="inline">
                <Link href="/auth/login" className="rounded-sm px-2 px-7 py-3 bg-indigo-400 text-white">Login</Link>
                
                <Link href="/register" className="px-2 px-7 py-3 bg-white text-indigo-400">Register</Link>
            </div>}
    </header>
  )
}
