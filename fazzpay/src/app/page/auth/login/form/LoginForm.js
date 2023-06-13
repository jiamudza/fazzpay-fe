import React from 'react'


//icon
import {GoMail} from 'react-icons/go'
import {FiLock} from 'react-icons/fi'
export default function LoginForm() {
  return (
    <div>
        <p className='font-bold text-xl'>
        Start Accessing Banking Needs
With All Devices and All Platforms
With 30.000+ Users
        </p>
        <p className='mt-10'>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!

        </p>
        <form className='mt-10'>
            <div className='flex gap-x-2 content-center border-b py-3'>
                <GoMail className='text-slate-400' size={20} />
                <input type='text' placeholder='Enter your e-mail' className='text-sm w-full active:border-none active:outline-none '/>
            </div>
            <div className='flex gap-x-2 content-center border-b py-3 mt-10'>
                <FiLock className='text-slate-400' size={20} />
                <input type='text' placeholder='Enter your password' className='text-sm w-full active:border-none active:outline-none '/>
            </div>
            <p className='font-bold text-end mt-3'>
                Forgot Passoword?
            </p>

            <button className='button-primary2 px-10 mt-5 text-center'>
                Login
            </button>
        </form>

        <p className='mt-5 text-center'>Don't have an account? lets <span className='text-primary font-bold'>Sign Up</span></p>
    </div>
  )
}
