"use client"
import React from 'react'
import Header from '@/Components/Header'
import MainCanvas from '@/Components/MainCanvas'
import { Provider } from 'react-redux'
import store from '../store/store'
import Footer from '@/Components/Footer'
const page = () => {
  return (
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