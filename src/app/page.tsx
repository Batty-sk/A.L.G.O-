"use client"
import React from 'react'
import Header from '@/Components/Header'
import MainCanvas from '@/Components/MainCanvas'
import { Provider } from 'react-redux'
import store from '../store/store'
const page = () => {
  return (
    <>
    <Provider store={store} >
    <Header/>
    <MainCanvas />
    </Provider>
    </>
    )
}

export default page