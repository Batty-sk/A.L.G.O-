import Button from '@mui/material/Button'
import {handleTrash,handleChangeMap} from './Toolbar'

const Toolbar = () => {
    

  return (
    <div className="flex justify-end">
        <Button variant="text" color="primary" onClick={()=>handleChangeMap()}>
            Reset
        </Button>
        <Button variant="text" color="primary" onClick={()=>handleTrash()}>
            Trash
        </Button>
    </div>
  )
}

export default Toolbar