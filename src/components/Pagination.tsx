import { useState } from "react";
import {IoIosArrowBack} from 'react-icons/io'

const Pagination = ({ currentPage, totalPages, onPagePreviousChange, onPageNextChange, onPageChange } : {currentPage:number, totalPages:number, onPagePreviousChange : (newPage: number)=>void, onPageNextChange : (newPage: number) => void, onPageChange : (newPage: number)=>void}) => {
  const [pageNumbersToShow] = useState(5); // Number of page numbers to display in pagination
  const [pageNumberRange, setPageNumberRange] = useState({
    start: 1,
    end: pageNumbersToShow,
  });

  // Calculate the page numbers to display in the pagination based on the current page and total pages
  const calculatePageNumbers = () => {
    if (totalPages <= pageNumbersToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const halfPageNumbersToShow = Math.floor(pageNumbersToShow / 2);
    let startPageNumber = currentPage - halfPageNumbersToShow;
    let endPageNumber = currentPage + halfPageNumbersToShow;

    if (startPageNumber < 1) {
      startPageNumber = 1;
      endPageNumber = pageNumbersToShow;
    } else if (endPageNumber > totalPages) {
      endPageNumber = totalPages;
      startPageNumber = totalPages - pageNumbersToShow + 1;
    }

    return Array.from({ length: endPageNumber - startPageNumber + 1 }, (_, i) => i + startPageNumber);
  };

  // Handle click on page number
  const handlePageNumberClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  // Handle click on "Previous" button
  const handlePreviousClick = () => {
    onPagePreviousChange(currentPage - 1);
    setPageNumberRange((prevState) => ({
      start: prevState.start - pageNumbersToShow,
      end: prevState.end - pageNumbersToShow,
    }));
  };

  // Handle click on "Next" button
  const handleNextClick = () => {
    onPageNextChange(currentPage + 1);
    setPageNumberRange((prevState) => ({
      start: prevState.start + pageNumbersToShow,
      end: prevState.end + pageNumbersToShow,
    }));
  };

  // Calculate the page numbers to display in the pagination
  const pageNumbers = calculatePageNumbers();

  return (
    <div className="flex justify-center items-stretch mt-8 box-border">
      <button
        className="border-y border-l bg-white hover:bg-purple-600 hover:text-white rounded-l-lg border-gray-300 p-2 disabled:bg-gray-200 disabled:text-current "
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack/>
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`bg-white border-y border-l border-gray-300  p-2 ${
            pageNumber === currentPage ? "bg-purple-600 text-white" : "hover:text-purple-600 hover:bg-purple-200"
          }`}
          onClick={() => handlePageNumberClick(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="border bg-white hover:bg-purple-600 hover:text-white rounded-r-lg border-gray-300 p-2 disabled:bg-gray-200 disabled:text-current "
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowBack className=" rotate-180"/>
      </button>
    </div>
  );
};

export default Pagination;
