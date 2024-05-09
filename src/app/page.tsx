"use client"
import React from 'react'
import Header from '@/Components/Header'
import MainCanvas from '@/Components/MainCanvas'
import { Provider } from 'react-redux'
import store from '../store/store'
import { useEffect,useState } from 'react'
import RiseLoader from "react-spinners/RiseLoader";

//RiseLoader

import Footer from '@/Components/Footer'

const page = () => {
  const[loading,setLoading]=useState<boolean>(true)

  useEffect(()=>{
    setTimeout(() => {
        setLoading(false)
    },3000);
  })
  return (
    loading? <RiseLoader
    style={{display:'flex',width:'100%',height:'100vh',justifyContent:'center',alignItems:'center'}}
    color={'red'}
    loading={loading}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />:
    <>
    <Provider store={store} >
    <Header/>

    <MainCanvas />
    <Footer />
    </Provider>
    </>
    )
}

export default page