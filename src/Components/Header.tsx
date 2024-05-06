"use client"

import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { useSelector } from 'react-redux'
import { DFS } from '@/Algorithms/DFS'


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
    <div>
        <div className="flex ">
            <div>
                <MenuItem value={'Dijikstra Algo'}>Dijikstra's Algorithm</MenuItem>
                <MenuItem value={'A+ Algo'}>A+ Algorithm</MenuItem>
            </div>

            <div id='run-btn' className=''>
                <Button onClick={HandleRun}  variant="contained" color="secondary" className='text-black ps-3 pe-3'>
                Run
                </Button>
            </div>

            <div id='title'>
                <h1 className='text-5xl font-extrabold'>A.L.G.O</h1>
            </div>
        </div>

    </div>
  )
}

export default Header