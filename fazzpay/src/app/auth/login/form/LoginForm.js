"use client"
import React, { useEffect, useState } from 'react'


//icon
import {GoMail} from 'react-icons/go'
import {FiLock} from 'react-icons/fi'

import { useRouter } from 'next/navigation'
import axios from 'axios'
export default function LoginForm() {
    const router = useRouter()

    const fazzPay = "https://fazz.adaptable.app/api/v1"
    const [loginForm, SetLoginForm] = useState({
        email:'',
        password:''
    })

    const [loginError, setLoginError] = useState({
        status: 'false'
    })

    const login = (e) => { 
        e.preventDefault()

        axios({
            url : `${fazzPay}/auth/login`,
            method: "POST",
            data: loginForm,
        })
        .then(res => {
            localStorage.setItem('@fazzLogin', JSON.stringify(res.data.data))
            router.push('/home')
        })
        .catch(err => {
            setLoginError({
                ...loginError,
                status: 'true',
                error: `${err.response  }`
            })
            console.log(loginError)
        })

        if(localStorage.getItem('@fazzLogin')){
            router.push('/home')
        }

    }

    useEffect(() => {
        if(localStorage.getItem('@fazzLogin')) router.push('/home')
    })


  return (
    <div className='bg-primary px-5 pt-5 text-white h-screen lg:bg-white lg:px-0 lg:pt-5 lg:text-black'>
        <p className='font-bold text-xl'>
        Start Accessing Banking Needs
With All Devices and All Platforms
With 30.000+ Users
        </p>
        <p className='mt-10'>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!

        </p>
        <form className='mt-10'>
            <div className='flex gap-x-2 content-center border-b py-3'>
                <GoMail className='text-white lg:text-slate-400' size={20} />
                <input onChange={(e) => {
                    SetLoginForm({
                        ...loginForm,
                        email: e.target.value,
                    })
                }} type='text' placeholder='Enter your e-mail' className='text-sm focus:outline-0 w-full bg-transparent active:border-none active:outline-none '/>
            </div>
            <div className='flex gap-x-2 content-center border-b py-3 mt-10'>
                <FiLock className='text-white lg:text-slate-400' size={20} />
                <input
                onChange={(e) => {
                    SetLoginForm({
                        ...loginForm,
                        password: e.target.value,
                    })
                }}
                type='password' placeholder='Enter your password' className='text-sm w-full bg-primary active:border-none focus:outline-none '/>
            </div>
            <p onClick={() => {
                router.push('/auth/forgot-password')
            }} className='font-bold text-end mt-3 cursor-pointer'>
                Forgot Passoword?
            </p>

            <button onClick={(login)} className='border border-primary lg:border-white bg-white lg:bg-primary w-full py-2 rounded-lg font-semibold text-primary lg:text-white hover:bg-primary lg:hover:bg-white hover:border hover:border-white lg:hover:border-primary ease-in-out duration-100 hover:text-white lg:hover:text-primary active:scale-95 px-10 mt-5 text-center'>
                Login
            </button>
        </form>

        <p className='mt-5 text-center'>Do not have an account? lets <span onClick={() => router.push('/auth/register')} className='text-white lg:text-primary font-bold cursor-pointer'>Sign Up</span></p>
    </div>
  )
}
