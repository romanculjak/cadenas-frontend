import React, { useState } from 'react'
import Container from '../components/Container'
import {BsArrowLeftShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductItem } from '../api/productsApi';


type Props = {}

function ProductDetailPage({}: Props) {

    const [currentImage, setCurrentImage] = useState<number>(0);


    const { id } = useParams();

    const navigate = useNavigate();




    const {
        isLoading,
        isError,
        error,
        data: product,
        isFetching,
        isPreviousData,
        } = useQuery<Product>(['/product', id], () => getProductItem(id), {
          
        })
    

        const handleBack = () => {
            navigate(-1);
        }


  if(isLoading) return (
    <div>
        <Container>
            It is loading...
        </Container>
    </div>
  )

  if(isError) return (
    <div>
        <Container>
            There seems to be some kind of error...
        </Container>
    </div>
  )
    
  return (
    <div className='py-10 md:py-20'>
        <Container>
            <button className='flex gap-1 items-center text-md font-semibold md:text-lg cursor-pointer' onClick={handleBack}>
                <BsArrowLeftShort/> 
                Back
            </button>
            <div className='flex flex-col md:flex-row gap-1 mt-4'>
                <div className='flex-1 bg-white p-4'>
                    <img className='w-full aspect-square object-contain' src={product.images[currentImage]}/>
                    {/*This means that if there is only one image available for a given product we will not render a images bar*/}
                    {product.images.length > 1 && (
                        <div className='w-full py-2 bg-white flex gap-1'>
                            {
                                product.images.map((image, i) => (
                                    <div key={i} role='button' onClick={()=>{setCurrentImage(i)}} className={`flex-1 cursor-pointer rounded-md ${i === currentImage ? 'border-2 overflow-hidden border-gray-300' : ''}`}>
                                        <img className='w-full aspect-square object-contain' src={image}/>
                                    </div>
                                ))
                            }
                        </div>)
                    }
                </div>
                <div className='flex-1 flex flex-col gap-2 md:gap-6 items-start bg-white p-4 md:py-14'>
                    <span className='text-sm md:text-lg p-2 rounded-md bg-neutral-800 text-white font-semibold'>{product.category}</span> 
                    <h1 className='text-2xl md:text-4xl font-semibold'>{product.title}</h1>
                    <span className='text-xl md:text-4xl'>{`$${product.price}`}</span>              
                    <p className='md:text-2xl'>{product.description}</p>
                    <div className='font-semibold md:text-xl flex gap-1 items-center'>
                        <AiFillStar/>
                        {product.rating}
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ProductDetailPage