'use client'
import PixelCanvas from "./PixelCanvas"
import ToolbarComp from "./ToolbarComp"
import { Grid } from "@mui/material"
const MainCanvas = () => {
  return (
    <>
    <Grid container justifyContent={"center"} className="mb-10">
      
    <Grid item xs={12} lg={9} className=" flex" ><PixelCanvas /></Grid>
    <Grid item xs={12} lg={2} justifyContent={"center"} className="pe-5"  id='toolbar'>
      <ToolbarComp />
    </Grid>
    </Grid>
    </>
  )
}

export default MainCanvas