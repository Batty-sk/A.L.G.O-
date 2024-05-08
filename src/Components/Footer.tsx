import React from 'react'
import { Caveat} from 'next/font/google'
const Cat = Caveat({ subsets: ['latin'] ,weight: ['400', '700']})
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <div className={`${Cat.className} flex justify-center text-2xl p-5`}>
        <span>Saorav.skumar@gmail.com <FavoriteIcon color={'error'}/></span>
    </div>
  )
}

export default Footer