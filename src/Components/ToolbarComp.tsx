"use client"
import Button from '@mui/material/Button'
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import { deleteMap } from '@/store/ToolbarSlice';
import { useDispatch } from 'react-redux';

const ToolbarComp = () => {
  const dispatch = useDispatch()
    const handleChangeMap = ()=>{
      if (window)
        window.location.reload()
    }
    const handleTrash = () =>{
      dispatch(deleteMap(1))

    }
  return (
    <div className="flex flex-col items-start p-4 ">
        <Button variant="outlined" color='error' className='font-bold'  onClick={()=>handleChangeMap()} startIcon={<RestartAltOutlinedIcon/>}>
            Reset
        </Button>
        <Button variant="outlined"  className='mt-3 font-bold'  onClick={()=>handleTrash()} startIcon={<CleaningServicesOutlinedIcon/>}>
            Trash
        </Button>

        <div className='mt-10'>
            <div className='flex items-center'><span className='' style={{width:'30px',height:'30px',background:'red',borderRadius:'100%',display:'inline-block'}}></span> <span className='ms-3 text-2xl'>You</span></div>
            
            <div className='flex items-center mt-5'><span className='' style={{width:'30px',height:'30px',background:'green',borderRadius:'100%',display:'inline-block'}}></span> <span className='ms-3 text-2xl'>Exit</span></div>
            <div className='flex items-center mt-5'><span className='' style={{width:'30px',height:'30px',background:'blue',borderRadius:'100%',display:'inline-block'}}></span> <span className='ms-3 text-2xl'>Traversed</span></div>

            <div className='flex items-center mt-5'><span className='' style={{width:'30px',height:'30px',background:'cyan',borderRadius:'100%',display:'inline-block'}}></span> <span className='ms-3 text-2xl'>Path</span></div>


        </div>    
    </div>
  )
}

export default ToolbarComp