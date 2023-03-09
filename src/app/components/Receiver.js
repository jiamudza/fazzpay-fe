"use client"

import axios from "axios"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Receiver() {

    const [users, setUsers] = useState([])
    axios.get("http://localhost:5000/api/users")
    .then(res => {
        console.log(res.data.data)
        setUsers(res.data.data)
    })
  return (
    <div>
        <p>Receiver List</p>

        {users.map(item => {
         return  <Link href={(`/transfer/amount/${item.id}`)} className="mt-20">
            <div className="bg-black w-10 h-10 rounded-full"></div>
            <p>{item.name}</p>
            
            </Link>
         
        })}
        
    </div>
  )
}
