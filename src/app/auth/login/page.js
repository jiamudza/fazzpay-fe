"use client"

import React from 'react'
// import { Link } from 'react-router-dom'
// import '../../assets/css/auth/auth.css'
import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {
    const router = useRouter()
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })
    const [validate, setValidate] = useState({error: false, message: ''})
    // const [isWorker, setIsworker] = useState(false);
    // const navigate = useNavigate()
    const handleLogin = (event)=> {
        event.preventDefault()
        axios({
            url: 'http://localhost:5000/api/auth/login',
            method:"POST",
            data: loginForm
        }).then((res)=> {
            console.log(res.data.data)
            const id = res.data.data.user.id;
            localStorage.setItem('@userLogin', JSON.stringify(res.data.data));
            // localStorage.setItem('@id', res.data.data.user.id)
            router.push(`/home/${id}`)
            
        }).catch((err)=> {
            setValidate({error: true, message: err})
        })
    }

    

  return (
      <>
        <div className='lg:flex max-h-screen lg:p-10 overflow-y-hidden'>
            <div id="auth-img" className='w-fit mx-auto hidden lg:block lg:flex-1 bg-blend-overlay sm:hidden'>
                {/* <img className='h-screen p-10' src={require('../../assets/img/auth/auth-img-placeholder.svg').default} /> */}
                <div id="auth-bg-overlay" className='w-full h-full'>
                    <div className='flex p-10'>
                        {/* <img className="px-1" src={require('../../assets/img/auth/brand-logo.svg').default} /> */}
                        <p className='pl-2 text-white font-semibold'>Peworld</p>
                    </div>

                    <h1 className='font-bold text-4xl leading-normal text-white p-20'>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
                </div>
            </div>


            <div id="auth-form" className="p-10 text-white h-screen lg:flex-1 lg:text-start lg:mt-10">
                <h2 className='text-lg font-bold md:text-center lg:text-header lg:text-xl lg:text-start'>Helo, Pewpeople</h2>
                <p className='mb-5 mt-3 md:text-center lg:text-text lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>

                <form onSubmit={handleLogin} className='md:flex md:flex-col md:w-3/4 md:mx-auto lg:w-full'>
                    <label htmlFor='email' className='lg:text-pale lg:text-sm'>
                        Email
                    </label>
                    <input onChange={(e)=> setLoginForm({
                              ...loginForm,
                            email: e.target.value
          })} className='text-black block w-full h-10 mt-2 rounded-sm p-2 mb-4 lg:border lg:border-placeholder text-header' type="email" placeholder='Masukan alamat email'/>

                    <label htmlFor="password"  className='lg:text-pale lg:text-sm'>
                    Kata sandi
                    </label>
                    <input onChange={(e)=> setLoginForm({
                                ...loginForm,
                                password: e.target.value
          })} className='text-black block w-full h-10 mt-2 rounded-s p-2 mb-5 lg:border lg:border-placeholder text-header' type="password" placeholder='Masuk kata sandi'/>


                    <button type='submit' className='mb-4 mt-5 w-full px-4 py-2 rounded-sm block bg-indigo-400 font-semibold'>Masuk</button>

                </form>
                    {/* <p className='font-semibold text-header mt-4 text-center'>Daftar</p>

                    <div id="btn-to-regist" className='flex justify-evenly mt-5'>
                        <Link href="/registworker" className='bg-primary border-2 lg:bg-transparent lg:hover:bg-primary lg:hover:text-white transi ease-in-out duration-300 border-primary rounded-md lg:text-header font-semibold px-5 py-2'>Daftar Sebagai Pelamar</Link>
                        <Link href="/registcompany" className='bg-secondary border-2 lg:bg-transparent lg:hover:bg-secondary lg:hover:text-white border-secondary rounded-md ease-in-out duration-300  lg:text-header font-semibold px-5 py-2'>Daftar Sebagai Perekrut</Link>
                    </div> */}

            </div>
        </div>
      </>
  )
}

export default Login