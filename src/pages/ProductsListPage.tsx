import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { getProductsPage } from '../api/productsApi'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import ProductListItem from '../components/ProductListItem'
import { usePagination } from '../utils/usePagination'

type Props = {}

function ProductsListPage({}: Props) {

  const queryClient = useQueryClient()


  const {currentPage,totalPages, pageLimit, setData, handlePrevPage, handlePageChange, handleNextPage} = usePagination(10);


  const {
    isLoading,
    isError,
    error,
    data: products,
    isFetching,
    isPreviousData,
    } = useQuery<Products>(['/users', currentPage], () => getProductsPage(pageLimit, ((currentPage*pageLimit)-pageLimit)), {
      keepPreviousData: true
    })

    useEffect(()=> {

      if(!products) return;

      setData(products.total)


    },[products])

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
            <div>
                <h2 className='mb-4 text-xl font-semibold'>Products</h2>
                <div className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4'>
                    {products && products.products && products.products.map((item)=><ProductListItem key={item.id} id={item.id} title={item.title} price={item.price} images={item.images}/>)}
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPagePreviousChange={handlePrevPage} onPageNextChange={handleNextPage} onPageChange={handlePageChange}/>
            </div>
        </Container>
    </div>
  )
}

export default ProductsListPage