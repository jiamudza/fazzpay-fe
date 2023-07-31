'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Placeholder from '../../../assets/img/placeholder.jpg'
import MainMenu from '@/app/components/MainMenu'

export default function Transfer({handleClick}) {

    const [users, setUsers] = useState({
        data: []
    })

    useEffect(() => {
        axios({
            url: `https://fazz.adaptable.app/api/v1/user`,
            method: "GET",
        })
        .then(res => {
            setUsers({
                ...users,
                data: res.data.data
            })
        })
        .catch(err => {
            console.log(err.response)
        })
    })
  return (
    <div className='font-nunito flex'>
        <div>
            <MainMenu />
        </div>
        <div id="content"  className="">
            <p className="text-xl font-bold">Search Receiver</p>
            <input type="text" className="bg-slate-300 mt-5 rounded-lg p-2 w-full" placeholder="search receiver here" />
            
            {users.data.map((item => {
                return (<div onClick={ e => handleClick(1)} className='flex m-4 gap-4 cursor-pointer'>
                    <Image src={item.user_image === null ? Placeholder : `${item.user_image}`}
                    className='h-16 w-16 rounded-md'
                    width={500}
                    height={500}
                    />
                    <div>
                        <p className='font-bold'>{`${item.first_name} ${item.last_name}`}</p>
                        <p className='text-xs text-slate-400 mt-4'>{item.phone === null ? '-' : item.phone}</p>
                    </div>
                </div>)
            }))
            }
        </div>
    </div>
  )
        }
