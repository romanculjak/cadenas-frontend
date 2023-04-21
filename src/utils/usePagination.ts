import { useCallback, useEffect, useState } from "react";




export const usePagination = (limit : number = 10) => {


  const [totalPages, setTotalPages] = useState<number>(1);
  const [pageLimit, setPageLimit] = useState(limit);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);

  const setData = (totalItems: number) => {
    

    const totalPages = Math.ceil(totalItems / limit);

    setTotalPages(totalPages);
    setTotalItems(totalItems);
  }

  const handlePageChange = (page : number) => {
    setCurrentPage(page)
  }

  const handlePrevPage = () => {
    if(currentPage === 1) return 1;
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    if(currentPage === totalPages) return currentPage;
    setCurrentPage((prevPage) => prevPage + 1);
  };


  const resetPages = () => {
    setCurrentPage(1);
  }

  return { totalPages, currentPage, totalItems,pageLimit,setData, handlePrevPage, handleNextPage,handlePageChange ,resetPages, setPageLimit };

}