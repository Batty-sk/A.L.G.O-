"use client"

import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'
import { DFS } from '@/Algorithms/DFS'
import { eye } from '@/Assests'
import { Caveat} from 'next/font/google'

import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

const Cat = Caveat({ subsets: ['latin'] ,weight: ['400', '700']})


const Header = () => {
    const canvasProps = useSelector((store:any)=>store.CanvasSlice)
    if (canvasProps.CanvasRef!=null)
            console.log('running b  ecause the canvas state has been changed in the store')
    const SelectedAlgorithm = (x:string)=>{
        console.log(
            'selected algo',x
        )
    }

    const HandleRun = () =>{
        console.log('canvas props',canvasProps)
        DFS([1,3],[3,5],2,canvasProps.CanvasRef)
            // it will first take the all the cordinates of the canvas then pass it to the algorithm, and1 the 
            //starting position 
            // this will initiate the action to run the particular algorithm on the basis of user selection 
            // then the algorithm will store the output as algo result in the store 
            // after that the mainCanvas will just have to read that array and show the result. 
    }
  return (
    <div className='mb-10  ' id='header'>
        <div className="flex justify-evenly">
            <div className='flex items-center justify-around '>
                <h2  className={`font text-3xl ${Cat.className}`}>Choose an Algorithm:</h2>
                <div className='ms-5 border' style={{boxShadow:'0px 0px 5px green'}}><select name="algos" id="algorithms" className='p-2 w-32'>
                    <option value="">Dfs</option>
                    <option value="">Dijisktra's</option>
                    <option value="">A+</option>
                    </select></div>
                <div id='run-btn' className='ms-5'>
                <Button onClick={HandleRun}  variant="outlined" className='text-black ps-3 pe-3' endIcon={<PlayCircleFilledOutlinedIcon/>}>
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