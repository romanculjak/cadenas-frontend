import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

type Props = {}

function RootLayout({}: Props) {

  const navigate = useNavigate();

  useEffect(()=> {

    navigate('/products');
    
  },[])

  return (
    <>
    <header>
        <Navbar/>
    </header>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default RootLayout