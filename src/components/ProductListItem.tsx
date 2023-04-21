import React from 'react'
import { useNavigate } from 'react-router-dom';


type Props = {
  id: string,
  title:string,
  price: number,
  images: string[],
}

function ProductListItem({id, title, price, images}: Props) {

  const navigate = useNavigate();


  const handleClick = ()=> {

    navigate(`/product/${id}`);

  }

  return (
    <div className='w-full bg-white p-2 py-3 rounded-xl shadow-md cursor-pointer hover:shadow-2xl transition-all' onClick={handleClick}>
        <img className=' object-contain w-full aspect-square rounded-xl' src={images[0]}/>
        <div className='flex flex-col gap-1 mt-2'>
            <span className='text-[18px] font-medium truncate'>{title}</span>
            <span className='text-[16px]'>{`$${price}`}</span>
        </div>
    </div>
  )
}

export default ProductListItem