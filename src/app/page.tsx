"use client"
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { useMediaQuery } from '@mui/material'; 
import store from '../store/store';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import CanvaRef from '@/canvarefContext';
import Header from '@/Components/Header';
import MainCanvas from '@/Components/MainCanvas';
import { Caveat} from 'next/font/google';
import Footer from '@/Components/Footer';
import { PacmanLoader } from 'react-spinners';
const Cat = Caveat({ subsets: ['latin'] ,weight: ['400', '700']})

const Page = () => {
  
  const [loading, setLoading] = useState<boolean>(true);
  const [canvaRef, setCanvaRef] = useState<any>(null);
  const isLargerScreen = useMediaQuery('(min-width:768px)'); // Check if screen width is larger than 768px

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLargerScreen ? (
        loading ? (
          <ClimbingBoxLoader
            style={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}
            color={'#0ABFF4'}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <Provider store={store}>
            <CanvaRef.Provider value={{ canvaRef, setCanvaRef }}>
              <Header />

              <MainCanvas />
              <Footer />
            </CanvaRef.Provider>
          </Provider>
        )
      ) : (
        <div className='flex flex-col items-center h-screen w-screen justify-center'>
        <PacmanLoader
            color={'orange'}
            loading={!isLargerScreen}
            size={45}
            aria-label="Please Use Larger Screen"
            data-testid="Larger Screen"
          />
        <div className='p-5  flex flex-col justify-center'>
          <p className='text-2xl text-center'>
          Please Use Larger Screen :)
          </p>
          <p className={`text-center ${Cat.className} text-2xl`}>(mobile view is underconstruction)</p>
        </div>
        </div>
      )}
    </>
  );
};

export default Page;
