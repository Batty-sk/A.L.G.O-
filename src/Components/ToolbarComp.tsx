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
    <div className="flex flex-col items-start md:p-4 p-6 min-h-fit">
      <div className='flex justify-evenly' style={{fontWeight:'bold'}}>
        <Button variant="outlined" color='error' className='p-2'  onClick={()=>handleChangeMap()} startIcon={<RestartAltOutlinedIcon/>}>
            Reset
        </Button>
        <Button variant="outlined"  className='mt-3 font-bold'  onClick={()=>handleTrash()} startIcon={<CleaningServicesOutlinedIcon/>}>
            Trash
        </Button>
        </div>

        <div className='mt-10 mb-10'>
        <Circle color="red" text="You" />
            
        <Circle color="green" text="Exit" />
        <Circle color="blue" text="Path" />

        <Circle color="#FFDF00" text="Traversed" />
        <Circle color="cyan" text="Shortest Path" />



        </div>    
    </div>
  )
}
interface CircleProps {
  color: string;
  text: string;
}

const Circle: React.FC<CircleProps> = ({ color, text }) => {
  return (
    <div className="flex items-center mt-5">
    <div
      className="w-8 h-8 rounded-full bg-gray-300 shadow-md"
      style={{ backgroundColor: color }}
    ></div>
    <span className="ml-3 text-2xl font-bold">{text}</span>
  </div>
  );
};

//164 163 158

export default ToolbarComp