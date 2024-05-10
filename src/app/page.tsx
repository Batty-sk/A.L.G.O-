"use client"
import React from 'react'
import Header from '@/Components/Header'
import MainCanvas from '@/Components/MainCanvas'
import { Provider } from 'react-redux'
import store from '../store/store'
import { useEffect,useState } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

//ClimbingBoxLoader

import Footer from '@/Components/Footer'

const page = () => {
  const[loading,setLoading]=useState<boolean>(true)

  useEffect(()=>{
    setTimeout(() => {
        setLoading(false)
    },3000);
  })
  return (
    loading? <ClimbingBoxLoader
    style={{display:'flex',width:'100%',height:'100vh',justifyContent:'center',alignItems:'center'  }}
    color={'#0ABFF4'}
    loading={loading}
    size={30}
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