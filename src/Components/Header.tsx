"use client"

import Button from '@mui/material/Button'
import {ChangeEvent} from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { BFS } from '@/Algorithms/BFS'
import { Dijkstra } from '@/Algorithms/Digikstra'
import { DFS } from '@/Algorithms/DFS'
import { Draw } from '@/Algorithms/Draw'
import { eye } from '@/Assests'
import { Caveat} from 'next/font/google'
import { useDispatch } from 'react-redux'
import { useEffect,useState } from 'react'
import { setRun } from '@/store/CommandLine'
import CanvaRef from '@/canvarefContext';

import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

const Cat = Caveat({ subsets: ['latin'] ,weight: ['400', '700']})


const Header = () => {
    const dispatch  = useDispatch()
    const [selected,setSelected] = useState<string>('bfs')
    const { canvaRef, setCanvaRef } = useContext(CanvaRef);

    const canvasProps = useSelector((store:any)=>store.CanvasSlice)
    if (canvasProps.CanvasRef!=null)
            console.log('running b  ecause the canvas state has been changed in the store')

    useEffect(()=>{
        console.log('Canvas Props and Canva Ref',canvasProps,canvaRef)
        if(canvasProps.Source!=null){
           if(canvasProps.Source.length){

            if(selected == 'dfs')
                {
                let TraversingArray= DFS(canvasProps.Source,canvasProps.Target,new Set(canvasProps.FilledP))
                Draw(TraversingArray[0],30,canvaRef,TraversingArray[1],null)
}
            else{
            let TraversingArray = BFS(canvasProps.Source,canvasProps.Target,new Set(canvasProps.FilledP))
            Draw(TraversingArray[0],50,canvaRef,null,TraversingArray[1])

            console.log('result',TraversingArray)
            }
        }
    }
        
    },[canvasProps.FilledP])
    const HandleRun = () =>{
        console.log('canvas props',canvasProps)
        dispatch(setRun(true))
            // it will first take the all the cordinates of the canvas then pass it to the algorithm, and1 the 
            //starting position 
            // this will initiate the action to run the particular algorithm on the basis of user selection 
            // then the algorithm will store the output as algo result in the store 
            // after that the mainCanvas will just have to read that array and show the result. 
    }

    const handleSelect = (x:ChangeEvent<HTMLSelectElement>) =>{
        setSelected(x.target.value)
    }
  return ( 
    <div className='mb-10 ' id='header'>
        <div className="flex md:justify-evenly sm:justify-center">
            <div className='flex items-center justify-around '>
                <h2  className={`font text-3xl ${Cat.className}`}>Choose an Algorithm:</h2>
                <div className='ms-5 border' style={{boxShadow:'0px 0px 5px black'}}>      <select
        name="algos"
        id="algorithms"
        className="p-3 w-56"
        onChange={handleSelect}
        value={selected}
      >
        <option value="dfs">Recursive</option>
        <option value="bfs">Shortest Path (BFS)</option>
      </select></div>
                <div id='run-btn' className='ms-5'>
                <Button onClick={HandleRun}  variant="outlined" className='text-black ps-3 pe-3 ' endIcon={<PlayCircleFilledOutlinedIcon/>}>
                Run
                </Button>
            </div>
            </div>

            <div id='title' className='text-start '>
            <img src={eye.src} alt="GIF" />
            </div>
        </div>

    </div>
  )
}

export default Header