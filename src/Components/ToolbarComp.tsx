import Button from '@mui/material/Button'
import {handleTrash,handleChangeMap} from './Toolbar'
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
const ToolbarComp = () => {
    

  return (
    <div className="flex flex-col items-start p-4">
        <Button variant="outlined" color='error' className='font-bold'  onClick={()=>handleChangeMap()} startIcon={<RestartAltOutlinedIcon/>}>
            Reset
        </Button>
        <Button variant="outlined"  className='mt-3 font-bold'  onClick={()=>handleTrash()} startIcon={<CleaningServicesOutlinedIcon/>}>
            Trash
        </Button>

        <div className='mt-10'>
            <div className='flex justify-center items-center'><span className='' style={{width:'30px',height:'30px',background:'red',borderRadius:'100%',display:'inline-block'}}></span> <span className='ms-3 text-2xl'>You</span></div>
            <div className='flex justify-center items-center mt-5'><span className='' style={{width:'30px',height:'30px',background:'green',borderRadius:'100%',display:'inline-block'}}></span> <span className='ms-3 text-2xl'>Exit</span></div>
        </div>    
    </div>
  )
}

export default ToolbarComp