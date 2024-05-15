'use client'
import PixelCanvas from "./PixelCanvas"
import ToolbarComp from "./ToolbarComp"
import { Grid } from "@mui/material"
import { Caveat} from 'next/font/google';
import { lightbulb } from "@/Assests";
const Cat = Caveat({ subsets: ['latin'] ,weight: ['400', '700']})

const MainCanvas = () => {
  return (
    <>
    <Grid container justifyContent={"center"} className="mb-10">
      
    <Grid item xs={12} lg={9} className="flex flex-col" >
    <div>
      <div className="p-2 flex items-center justify-center">
      <img  src={lightbulb.src} alt="" height={35} width={35} className="me-3"/>
      <h2 className={`${Cat.className} text-2xl text-center `}>You Can Draw Some Obstacles. </h2>
      </div>
      <PixelCanvas />
      </div>
   </Grid>
    <Grid item xs={12} lg={2} justifyContent={"center"} className="pe-5 pt-5"  id='toolbar'>
      <ToolbarComp />
    </Grid>
    </Grid>
    </>
  )
}

export default MainCanvas