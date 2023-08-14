'use client'
import React, { useEffect, useState } from 'react'
import HeaderAfterLogin from './HeaderAfterLogin'
import HeaderBeforeLogin from './HeaderBeforeLogin'

export default function Header() {

    const [login, setLogin] = useState(false)

useEffect(() => {
    if(localStorage.getItem('@fazzLogin')) {
        setLogin(true)
    } else setLogin(false)
})
  return (
    <div>
        {login === true ? <div><HeaderAfterLogin /></div> : <div><HeaderBeforeLogin /></div>}
    </div>
  )
}
