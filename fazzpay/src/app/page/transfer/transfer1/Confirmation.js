'use client'
import React, { useState } from 'react'

export default function Confirmation({callback}) {
    
    
  return (
    <div>
        <p className='font-bold'>Transfer To</p>
        <div className="mt-5 flex items-center gap-5">
          <div className="h-10 w-10 rounded-lg bg-primary"></div>
          <div>
            <p className="font-bold">Samuel Suhi</p>
            <p className="text-sm text-slate-400">+62 896 0108 5905</p>
          </div>
        </div>

        <p className='mt-5'>Details</p>

        <div className='mt-5'>
            <p className='text-slate-400 text-sm'>Amount</p>
            <p className='font-bold'>Rp120.000</p>
        </div>
        <div className='mt-5'>
            <p className='text-slate-400 text-sm'>Balance Left</p>
            <p className='font-bold'>Rp20.000</p>
        </div>
        <div className='mt-5'>
            <p className='text-slate-400 text-sm'>Date & Time</p>
            <p className='font-bold'>May 11, 2020 - 12.20</p>
        </div>
        <div className='mt-5'>
            <p className='text-slate-400 text-sm'>Notes</p>
            <p className='font-bold'>For buying socks</p>
        </div>

        <button
        
         className='button-primary mt-10 mx-auto relative right-0'>Continue</button>
    </div>
  )
}
