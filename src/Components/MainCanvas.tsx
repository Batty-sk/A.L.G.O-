'use client'
import PixelCanvas from "./PixelCanvas"
import ToolbarComp from "./ToolbarComp"
import { Grid } from "@mui/material"
const MainCanvas = () => {
  return (
    <>
    <Grid container justifyContent={"center"} className="mb-10">
      
    <Grid item sm={9} className=" flex" ><PixelCanvas /></Grid>
    <Grid item sm={2} className="pe-5" style={{boxShadow:'0px 0px 5px black'}}>
      <ToolbarComp />
    </Grid>
    </Grid>
    </>
  )
}

export default MainCanvas