'use client'
import React from 'react'

export default function PinConfirm({modal}) {
  return (
    <div className='h-screen bg-slate-400 bg-opacity-0 relative top-1/2'>
        <div className=' py-10 bg-white grid px-10 inset-center rounded-lg shadow-xl'>
            <p className='bg-red-500 w-5 text-center absolute right-0 rounded-tr-lg hover:bg-white border-3 border-transparent  hover:text-red-500 hover:border-3 cursor-pointer hover:border-red-500 text-white inline'>x</p>
            <p className='font-bold'>Enter Pin for Confirmation</p>
            <p className='mt-2 text-slate-400 w-40'>Enter your 6 digits PIN for confirmation to continue transferring money. </p>
            <input type='text' className='w-20 mx-auto mt-5'/>
            <button className='button-primary mt-5'>Confirm</button>
        </div>
        
    </div>
  )
}
